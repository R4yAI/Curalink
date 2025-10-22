// Select all links with the class "nav-btn"
const items = document.querySelectorAll(".sidebar-item");

// Get the current page URL path (like "about.html")
const currentPage = window.location.pathname.split("/").pop();

// Loop through each link
items.forEach((item) => {
  const linkPage = item
    .querySelector(".sidebar-link")
    .getAttribute("href")
    .split("/")
    .pop(); // e.g. "about.html"

  // If this link's href matches the current page
  if (linkPage === currentPage) {
    item.classList.add("active"); // Add the "active" class
  }
});
