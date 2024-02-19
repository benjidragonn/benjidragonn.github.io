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


//--------- CV Définition --------------

function afficherModal(contenu) {
  var modalContainer = document.querySelector('.modal-container');
  var contenuModal = document.getElementById('contenuModal');

  contenuModal.innerText = contenu;
  modalContainer.style.display = 'flex';
}

function fermerModal() {
  var modalContainer = document.querySelector('.modal-container');
  modalContainer.style.display = 'none';
}



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
