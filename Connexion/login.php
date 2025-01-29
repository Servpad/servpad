<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connexion à la base de données
    $conn = new mysqli('localhost', 'root', '', 'servpad');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row['password'])) {
                // Redirection vers formules.html après connexion réussie
                header("Location: ../formule/formules.html");
                exit();
            } else {
                // Redirection vers Connexion.html en cas de mot de passe incorrect
                header("Location: Connexion.html?error=incorrect_password");
                exit();
            }
        } else {
            // Redirection vers Connexion.html en cas de nom d'utilisateur incorrect
            header("Location: Connexion.html?error=user_not_found");
            exit();
        }

        $stmt->close();
    } else {
        error_log("Erreur de préparation : " . $conn->error);
        echo "Erreur SQL.";
    }

    $conn->close();
}
?>
