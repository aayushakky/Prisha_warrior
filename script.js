// Function to redirect to the home page
function goToHome() {
  window.location.href = "index.html"; // Replace with your actual home page path
}

// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.querySelector(".modal__close");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");

  let currentIndex = 0; // Tracks the current image index
  const images = Array.from(document.querySelectorAll(".gallery__item"));

  // Open modal and display clicked image
  images.forEach((img, index) => {
      img.addEventListener("click", () => {
          modal.style.display = "flex";
          modalImage.src = img.src;
          modalCaption.textContent = img.alt;
          currentIndex = index;
      });
  });

  // Close modal
  modalClose.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Navigate to the previous image
  modalPrev.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImage.src = images[currentIndex].src;
      modalCaption.textContent = images[currentIndex].alt;
  });

  // Navigate to the next image
  modalNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      modalImage.src = images[currentIndex].src;
      modalCaption.textContent = images[currentIndex].alt;
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });

  // Keyboard navigation for modal
  document.addEventListener("keydown", (e) => {
      if (modal.style.display === "flex") {
          if (e.key === "Escape") {
              modal.style.display = "none";
          } else if (e.key === "ArrowLeft") {
              modalPrev.click();
          } else if (e.key === "ArrowRight") {
              modalNext.click();
          }
      }
  });
});
