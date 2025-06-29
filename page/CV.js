//--------- CV Modal --------------

document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById("openBtn");
  const modal = document.getElementById("pdfModal");
  const closeBtn = document.getElementById("closeBtn");

  openBtn.addEventListener("click", function() {
      modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});
