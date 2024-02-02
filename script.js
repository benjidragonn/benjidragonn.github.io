//--------- overlay --------------

document.addEventListener("DOMContentLoaded", function() {
  var overlay = document.querySelector('.overlay');
  
  window.addEventListener('scroll', function() {
    // Si vous descendez de plus de 100 pixels, affichez l'overlay
    if (window.scrollY > 100) {
      overlay.style.display = 'block';
    } else {
      overlay.style.display = 'none';
    }
  });
});


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


//--------- Partie 3 Compétences --------------

function showContent(contentId) {
  // Masquer le message lorsqu'un bouton est cliqué
  document.getElementById('message').style.display = 'none';

  // Masquer tous les contenus
  document.querySelectorAll('.content').forEach(function(content) {
      content.classList.remove('active');
  });

  // Réinitialiser la classe active de tous les boutons
  document.querySelectorAll('.type button').forEach(function(button) {
      button.classList.remove('active');
      button.style.color = '#000000'; // Réinitialiser la couleur du texte à chaque clic
  });

  // Afficher le contenu spécifique
  document.getElementById(contentId + 'Content').classList.add('active');

  // Mettre en surbrillance le bouton actif
  var activeButton = document.querySelector('.type button.' + contentId);
  activeButton.classList.add('active');
  activeButton.style.color = '#ffffff'; // Changer la couleur du texte en blanc
}



 //--------- Carousels --------------

 let currentIndex = 0;
 let interval; // variable pour stocker l'intervalle
 const totalSlides = document.querySelectorAll('.carousel-item').length;
 const intervalTime = 10000; // 10 seconds

 function changeSlide(offset) {
     currentIndex = (currentIndex + offset + totalSlides) % totalSlides;
     updateCarousel();
     resetInterval();
 }

 function resetInterval() {
     // Annule l'intervalle actuel
     clearInterval(interval);
     // Démarre un nouvel intervalle
     interval = setInterval(() => {
         changeSlide(1);
     }, intervalTime);
 }

 function updateCarousel() {
     const container = document.querySelector('.carousel-container');
     const slideWidth = document.querySelector('.carousel-item').offsetWidth;
     const newTransformValue = -currentIndex * slideWidth + 'px';
     container.style.transform = 'translateX(' + newTransformValue + ')';

     // Mettez à jour les indicateurs
     const indicators = document.querySelectorAll('.indicator');
     indicators.forEach((indicator, index) => {
         if (index === currentIndex) {
             indicator.classList.add('active');
         } else {
             indicator.classList.remove('active');
         }
     });
 }

 // Ajoutez des indicateurs pour chaque image
 const indicatorsContainer = document.querySelector('.carousel-indicators');
 for (let i = 0; i < totalSlides; i++) {
     const indicator = document.createElement('div');
     indicator.classList.add('indicator');
     indicator.addEventListener('click', () => {
         changeSlide(i - currentIndex);
         resetInterval(); // Réinitialise l'intervalle lorsqu'un indicateur est cliqué
     });
     indicatorsContainer.appendChild(indicator);
 }

 // Initialisez les indicateurs
 updateCarousel();

 // Démarre l'intervalle initial
 resetInterval();