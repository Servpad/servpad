commande1 = document.getElementById('commande1');

function mettreAJourCommande() {
    let commandes = [];

    // Récupérer toutes les clés contenant "cle_"
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.includes("cle_")) {
            commandes.push(localStorage.getItem(key));
        }
    }

    // Affichage dans la console
    console.log("Commandes mises à jour :", commandes);

    // Affichage sur la page
    if (commandes.length > 0) {
        commande1.innerText = commandes.join(", ");
    } else {
        commande1.innerText = "Aucune commande trouvée.";
    }
}

// Actualiser toutes les 5 secondes
setInterval(mettreAJourCommande, 5000);

// Écouter les changements du localStorage en temps réel
window.addEventListener("storage", mettreAJourCommande);

// Appel initial
mettreAJourCommande();

// Bouton pour supprimer toutes les commandes
document.getElementById("clearStorage").addEventListener("click", function () {
    localStorage.clear(); // Supprime tout le localStorage
    document.getElementById("message").innerText = "Toutes les commandes ont été supprimées.";
    console.log("Toutes les commandes traitées");
    mettreAJourCommande(); // Met à jour l'affichage après suppression
});

