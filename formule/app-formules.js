// init panier
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// selec element html



// Liste des commandes validées
const validatedOrders = [];

// Ajouter une commande
function addToOrder(item, price) {
    orders.push({ item, price });
    alert(`${item} ajouté au panier.`)
    localStorage.setItem('${item}', '${price}');
    console.log(`${item} ${price} ajouté au panier.`);
}

// Section cuisine
function showcuisineSection() {
    const password = prompt("Entrez le mot de passe cuisine :");
    if (password === "cuisine123") {
        document.getElementById("cuisine-section").style.display = "block";
        document.getElementById("server-section").style.display = "none";
        updatecuisineSection();
    } else {
        alert("Mot de passe incorrect !");
    }
}

function updatecuisineSection() {
    const orderList = document.getElementById("order-list");
    if (orders.length === 0) {
        orderList.innerHTML = "<p>Aucune commande à valider.</p>";
        return;
    }
    orderList.innerHTML = orders.map((order, index) =>
        `<div class="menu-item">
            <span>${order.item} - €${order.price}</span>
            <button class="action-button" onclick="validateOrder(${index})">Valider</button>
        </div>`
    ).join('');
}

function validateOrder(index) {
    validatedOrders.push(orders[index]);
    orders.splice(index, 1);
    updatecuisineSection();
}

// Section Serveur
function showServerSection() {
    const password = prompt("Entrez le mot de passe serveur :");
    if (password === "server123") {
        document.getElementById("server-section").style.display = "block";
        document.getElementById("cuisine-section").style.display = "none";
        updateServerSection();
    } else {
        alert("Mot de passe incorrect !");
    }
}

function updateServerSection() {
    const validatedOrdersDiv = document.getElementById("validated-orders");
    if (validatedOrders.length === 0) {
        validatedOrdersDiv.innerHTML = "<p>Aucune commande validée.</p>";
        return;
    }
    validatedOrdersDiv.innerHTML = validatedOrders.map(order =>
        `<div class="menu-item">
            <span>${order.item} - €${order.price}</span>
        </div>`
    ).join('');
}

// Sélectionner l'élément de l'interrupteur
const toggleSwitch = document.getElementById('input');

// Fonction pour appliquer le thème au chargement de la page
function applyTheme(darkMode) {
    const cards = document.querySelectorAll('.card'); // Sélectionner toutes les cartes
    if (darkMode === 'enabled') {
        document.body.style.backgroundColor = '#3a3a3a';
        document.body.style.color = '#ffffff';
        toggleSwitch.checked = true; // Synchroniser le bouton
        
                // Appliquer le style sombre aux cartes
    cards.forEach(card => {
        card.style.backgroundColor = '#c3c3c3'; // Couleur de fond sombre
        card.style.color = '#ffffff'; // Couleur du texte clair
        card.style.borderColor = '#666666'; // Couleur de la bordure
}); 
    } else {
        document.body.style.backgroundColor = '#fff5ec';
        document.body.style.color = '#3a3a3af7';
        toggleSwitch.checked = false; // Synchroniser le bouton

                // Réinitialiser le style des cartes
    cards.forEach(card => {
        card.style.backgroundColor = ''; // Couleur par défaut
        card.style.color = ''; // Couleur par défaut
        card.style.borderColor = ''; // Couleur par défaut
 });
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
