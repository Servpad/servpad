<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: Connexion.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Compte</title>
    <link rel="stylesheet" href="Connexion.css">
</head>
<body>
    <div class="container">
        <h1>Bienvenue, <?php echo $_SESSION['username']; ?>!</h1>
        <p>Vous êtes connecté.</p>
        <a href="logout.php">Se déconnecter</a>
    </div>
</body>
</html>