const uploadInput = document.getElementById("uploadID");
const fileNameDisplay = document.getElementById("fileName");

// When user chooses a file
uploadInput.addEventListener("change", () => {
  if (uploadInput.files.length > 0) {
    fileNameDisplay.textContent = uploadInput.files[0].name;
  } else {
    fileNameDisplay.textContent = "";
  }
});
