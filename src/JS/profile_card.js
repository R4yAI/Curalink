const editBtn = document.getElementById("edit-btn");
const overlay = document.getElementById("overplay");
const cancelBtn = document.getElementById("cancel-btn");

editBtn.addEventListener("click", () => {
  overlay.style.display = "flex"; // Affiche la modale
});

cancelBtn.addEventListener("click", () => {
  overlay.style.display = "none"; // Ferme la modale
});

window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

