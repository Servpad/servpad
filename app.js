// Sélectionner l'élément de l'interrupteur
const toggleSwitch = document.getElementById('input');

// Ajouter un écouteur d'événement pour le changement d'état
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        // Mode sombre
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#ffffff';
    } else {
        // Mode clair
        document.body.style.backgroundColor = '#fff5ec'
        document.body.style.color = '#3a3a3af7'
    }
});
