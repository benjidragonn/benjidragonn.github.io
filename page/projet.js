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



 //--------- Carousels --------------

 let indiceActuel = 0;
 let intervalle; // variable pour stocker l'intervalle
 const diapositivesTotales = document.querySelectorAll('.element-diaporama').length;
 const tempsIntervalle = 10000; // 10 secondes

 function changerDiapo(offset) {
     indiceActuel = (indiceActuel + offset + diapositivesTotales) % diapositivesTotales;
     mettreAJourDiaporama();
     reinitialiserIntervalle();
 }

 function reinitialiserIntervalle() {
     // Annule l'intervalle actuel
     clearInterval(intervalle);
     // Démarre un nouvel intervalle
     intervalle = setInterval(() => {
         changerDiapo(1);
     }, tempsIntervalle);
 }

 function mettreAJourDiaporama() {
     const conteneur = document.querySelector('.conteneur-diaporama');
     const largeurDiapo = document.querySelector('.element-diaporama').offsetWidth;
     const nouvelleValeurTransform = -indiceActuel * largeurDiapo + 'px';
     conteneur.style.transform = 'translateX(' + nouvelleValeurTransform + ')';

     // Mettez à jour les indicateurs
     const indicateurs = document.querySelectorAll('.indicateur');
     indicateurs.forEach((indicateur, index) => {
         if (index === indiceActuel) {
             indicateur.classList.add('actif');
         } else {
             indicateur.classList.remove('actif');
         }
     });
 }

 // Ajoutez des indicateurs pour chaque image
 const conteneurIndicateurs = document.querySelector('.indicateurs-diaporama');
 for (let i = 0; i < diapositivesTotales; i++) {
     const indicateur = document.createElement('div');
     indicateur.classList.add('indicateur');
     indicateur.addEventListener('click', () => {
         changerDiapo(i - indiceActuel);
         reinitialiserIntervalle(); // Réinitialise l'intervalle lorsqu'un indicateur est cliqué
     });
     conteneurIndicateurs.appendChild(indicateur);
 }

 // Initialisez les indicateurs
 mettreAJourDiaporama();

 // Démarre l'intervalle initial
 reinitialiserIntervalle();