
//hold the hover when we click on the contact
const contacts = document.querySelectorAll('.contact');

contacts.forEach(contact => {
  contact.addEventListener('click', () => {
    
    contacts.forEach(c => c.classList.remove('selected'));

    contact.classList.add('selected');
  });
});

const input = document.getElementById("msg");
const emoji = document.getElementById("emojiBtn");
const send  = document.getElementById("sendBtn");
const photoBtn= document.getElementById("photoBtn");
const photo= document.getElementById("photo");
const cameraBtn = document.getElementById("camera-pic"); 
const cameraInput = document.getElementById("cameraInput");
const addBtn = document.getElementById("addBtn");
const addFile = document.getElementById("addFile");
const  Upload_File  = document.getElementById("fileInput");
const bodyConv = document.getElementById("body-conv");
const thumbupBtn = document.getElementById("thumbUpBtn");


const iconPanel = document.getElementById("iconPanel");
const toggleBtn = document.getElementById("toggleBtn");


//afficher ou cacher le botton send
input.addEventListener("input", () => {
    if (input.innerText.trim().length > 0 ) {
        emoji.style.display = "none";
        send.style.display = "block";

    } else {
        emoji.style.display = "block";
        send.style.display = "none";
    }
});
//apres envoyer le message ou l'effacer le bouton emoji revient  
send.addEventListener("click", () => {
    input.innerHTML = "";          
    input.classList.remove("input");
   
    emoji.style.display = "block";
    send.style.display = "none";
});


// IL NE MARCHE PAS 
// Envoyer le message
// récupérer le <ul> dans le body
const chatList = bodyConv.querySelector("ul");

// --- fonction pour créer un <li> ---
const createChatLi = (message, className) => {
  const chatli = document.createElement("li");
  chatli.classList.add(className);  // 'send_message' ou 'received_message'
  chatli.innerHTML = `<p>${message}</p>`;
  return chatli;
};

// --- fonction pour gérer l'envoi de message ---
const handleMessage = () => {
  const userMsg = input.innerHTML.trim();
  if(userMsg === "") return;

  const li = createChatLi(userMsg, "send_message");
  chatList.appendChild(li);

  input.innerHTML = "";
  send.style.display = "none";
  emoji.style.display = "block";

  // scroll vers le bas
  bodyConv.scrollTop = bodyConv.scrollHeight;
};

// --- bouton send ---
send.addEventListener("click", handleMessage);


// Ajouter une image dans le message-box
photoBtn.addEventListener("click", () => photo.click());

photo.addEventListener('change', () => {
  if (photo.files.length > 0) {
    const file = photo.files[0];
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.style.width = "80px";
    img.style.height = "80px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    img.style.margin = "2px";
    input.appendChild(img);
  }
});


//prendre une photo

cameraBtn.addEventListener("click", () => cameraInput.click());

cameraInput.addEventListener("change", () => {

    if (cameraInput.files.length > 0) {

        const file = cameraInput.files[0];
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.width = "80px";
        img.style.height = "80px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "10px";
        img.style.margin = "2px";

        input.appendChild(img);
    }
});


//add a file 
addBtn.addEventListener("click", () => {
  addFile.style.display = addFile.style.display === "none" ? "block" : "none";

});

Upload_File.addEventListener('change', () => {
  if (Upload_File.files.length > 0) {
    addFile.style.display = "none" ;
    const file = Upload_File.files[0];

    if (file.type.startsWith("image/")) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.style.width = "80px";
      img.style.height = "80px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "10px";
      img.style.margin = "2px";
      input.appendChild(img);
    } else {
      const span = document.createElement("span");
      span.innerText = file.name;
      span.style.display = "block";
      span.style.margin = "2px";
      span.style.padding = "5px";
      span.style.border = "1px solid #ccc";
      span.style.borderRadius = "5px";
      input.appendChild(span);
    }
  }
});

//afficher le thumb up dasn le box apres qu'on clique on it 
thumbupBtn.addEventListener("click", () => {
  // créer un élément pour afficher le thumb up
  const msg = document.createElement("div");
  msg.className = "send_message";
  msg.innerHTML = `<span class="material-symbols-outlined">thumb_up</span>`;

  // l'ajouter dans le body de la conversation
  bodyConv.appendChild(msg);
});



toggleBtn.addEventListener("click", () => {
    iconPanel.classList.toggle("active");
});