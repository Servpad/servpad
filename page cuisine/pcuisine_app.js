const commande1 = document.getElementById('commande1'); 

let commandes = [];

// Récupérer toutes les clés contenant "clée_"
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.includes("cle_")) {
        commandes.push(localStorage.getItem(key));
    }
}

// Affichage dans la console
console.log(commandes);

// Affichage sur la page
if (commandes.length > 0) {
    commande1.innerText = commandes.join(", ");
} else {
    commande1.innerText = "Aucune commande trouvée.";
}
