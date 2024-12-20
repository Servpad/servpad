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
