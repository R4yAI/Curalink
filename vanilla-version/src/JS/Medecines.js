
// Allow clicking the same card again to close its table
document.addEventListener("DOMContentLoaded", () => {
  const labels = document.querySelectorAll(".medicine-card-clickable");
  const noneRadio = document.getElementById("none");

  labels.forEach(label => {
    label.addEventListener("click", function (e) {
      const cardRadio = document.getElementById(this.getAttribute("for"));

      // If the card is already opened → close it
      if (cardRadio && cardRadio.checked) {
        noneRadio.checked = true;   // Select hidden "none" radio
        e.preventDefault();         // Prevent re-triggering opening
      }
    });
  });
});

// Smooth scroll when a card expands
document.addEventListener("change", (event) => {
  if (event.target.classList.contains("donors-popup-toggle")) {

    // Only scroll when opening a card (not closing)
    if (event.target.id !== "none") {
      const wrapper = event.target.closest(".medicine-card-wrapper");
      if (wrapper) {
        setTimeout(() => {
          wrapper.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // wait for animation
      }
    }
  }
});
