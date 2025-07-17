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












