document.addEventListener("DOMContentLoaded", () => {
  // Get all share buttons
  const shareButtons = document.querySelectorAll(".card .share");

  shareButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const card = button.closest(".card");   // find the card root
      const title = card.querySelector(".p1").innerText;  // event title

      const shareData = {
        title: title,
        text: `Check out this event: ${title}`,
        url: window.location.href // or a link specific to the event
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          console.log("Share successful!");
        } catch (err) {
          console.log("Share canceled", err);
        }
      } else {
        alert("Sharing is not supported on this browser.");
      }
    });
  });
});