// ======== DOM Elements ========
const contacts = document.querySelectorAll('.contact');
const chats = document.querySelectorAll('.body-conversation');
const receiverName = document.getElementById('receiver_name');

const input = document.getElementById("msg");
const emoji = document.getElementById("emojiBtn");
const send  = document.getElementById("sendBtn");
const photoBtn = document.getElementById("photoBtn");
const photo = document.getElementById("photo");
const cameraBtn = document.getElementById("camera-pic"); 
const cameraInput = document.getElementById("cameraInput");
const addBtn = document.getElementById("addBtn");
const addFile = document.getElementById("addFile");
const uploadFile = document.getElementById("fileInput");
const thumbupBtn = document.getElementById("thumbUpBtn");
const iconPanel = document.getElementById("iconPanel");
const toggleBtn = document.getElementById("toggleBtn");


const getActiveChat = () => document.querySelector('.body-conversation.active');
const getActiveReceiver = () => document.querySelector('.receiver_name.active');

// Function to switch chat
contacts.forEach(contact => {
  contact.addEventListener('click', () => {
    // Remove 'selected' from all contacts and add to clicked one
    contacts.forEach(c => c.classList.remove('selected'));
    contact.classList.add('selected');

    // Get chat ID from clicked contact
    const chatId = contact.dataset.chat;

//  UPDATE RECEIVER NAME 
    const receiverName = contact.querySelector(".contact_name").textContent;
    const nameBox = document.querySelector(".receiver_name");
    nameBox.textContent = receiverName;
    nameBox.classList.add("active");


    // Show corresponding chat, hide others
    chats.forEach(chat => {
      if (chat.id === chatId) {
        chat.style.display = 'block';
        chat.classList.add('active');
      } else {
        chat.style.display = 'none';
        chat.classList.remove('active');
      }
    });

  });
});

// auto-select the first contact/chat on page load
if (contacts.length > 0) contacts[0].click();


// ======== Contact Click Event ========
contacts.forEach(contact => {
    contact.addEventListener('click', () => selectContact(contact));
});

// ======== Send Button ========
const handleMessage = () => {
    const activeChat = getActiveChat();
    if (!activeChat) return;

    const userMsg = input.innerHTML.trim();
    if (!userMsg && input.children.length === 0) return;

    const msg = document.createElement("div");
    msg.className = "send_message";

    if (userMsg) msg.innerHTML = `<p>${userMsg}</p>`;

    Array.from(input.children).forEach(child => {
        msg.appendChild(child.cloneNode(true));
    });

    activeChat.appendChild(msg);
    input.innerHTML = "";
    send.style.display = "none";
    emoji.style.display = "block";

    activeChat.scrollTop = activeChat.scrollHeight;
};

input.addEventListener("input", () => {
    if (input.innerText.trim().length > 0) {
        emoji.style.display = "none";
        send.style.display = "block";
    } else {
        emoji.style.display = "block";
        send.style.display = "none";
    }
});

send.addEventListener("click", handleMessage);

// ======== Thumb Up Button ========
thumbupBtn.addEventListener("click", () => {
    const activeChat = getActiveChat();
    if (!activeChat) return;

    const msg = document.createElement("div");
    msg.className = "send_message";
    msg.innerHTML = `<span class="material-symbols-outlined">thumb_up</span>`;

    activeChat.appendChild(msg);
    activeChat.scrollTop = activeChat.scrollHeight;
});

// ======== Toggle Icon Panel ========
toggleBtn.addEventListener("click", () => iconPanel.classList.toggle("active"));

// ======== Photo / Camera / File Upload ========

//photo
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
//camera
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
//add file 
addBtn.addEventListener("click", () => {
    addFile.style.display = addFile.style.display === "none" ? "block" : "none";
});

uploadFile.addEventListener('change', () => {
    if (uploadFile.files.length > 0) {
        addFile.style.display = "none";
        const file = uploadFile.files[0];

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
