document.addEventListener("DOMContentLoaded", () => {

  const select = document.querySelector(".custom-select");
  const selected = select.querySelector(".selected");
  const options = select.querySelector(".options");

  // 1. Assign categories to cards without modifying HTML
  const cards = {
    "card1": "blood-donation",
    "card2": "equipment-donation",
    "card3": "awareness",
    "card4": "blood-donation"
  };

  Object.keys(cards).forEach(id => {
    const el = document.getElementById(id);
    el.dataset.category = cards[id];
  });

  // Toggle dropdown
  selected.addEventListener("click", () => {
    options.classList.toggle("open");
  });

  // Handle selecting an option
  options.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => {

      const filterValue = option.dataset.filter;

      // Update visible selected label
      selected.textContent = option.textContent;

      // FILTERING LOGIC
      document.querySelectorAll(".card").forEach(card => {
        const category = card.dataset.category;

        if (filterValue === "all-events" || filterValue === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // Close dropdown
      options.classList.remove("open");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      options.classList.remove("open");
    }
  });

});
