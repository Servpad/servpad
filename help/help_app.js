// Sélectionner l'élément de l'interrupteur
const toggleSwitch = document.getElementById('input');

// Fonction pour appliquer le thème au chargement de la page
function applyTheme(darkMode) {
    if (darkMode === 'enabled') {
        document.body.style.backgroundColor = '#3a3a3a';
        document.body.style.color = '#ffffff';
        toggleSwitch.checked = true; // Synchroniser le bouton
    } else {
        document.body.style.backgroundColor = '#fff5ec';
        document.body.style.color = '#3a3a3af7';
        toggleSwitch.checked = false; // Synchroniser le bouton
    }
}

// Appliquer le thème au chargement
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode'); // Récupérer l'état du mode sombre
    applyTheme(darkMode); // Appliquer le thème en fonction de l'état
});

// Ajouter un écouteur d'événement pour le changement d'état
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        localStorage.setItem('darkMode', 'enabled'); // Enregistrer l'état
        applyTheme('enabled'); // Appliquer le mode sombre
    } else {
        localStorage.setItem('darkMode', 'disabled'); // Enregistrer l'état
        applyTheme('disabled'); // Désactiver le mode sombre
    }
});
