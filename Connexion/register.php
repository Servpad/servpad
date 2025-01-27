<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Connexion à la base de données
    $conn = new mysqli('localhost', 'root', '', 'servpad');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $stmt->bind_param("sss", $username, $email, $hashed_password);
        if ($stmt->execute()) {
            header("Location: Connexion.html");
            exit();
        } else {
            error_log("Erreur d'insertion : " . $stmt->error);
            echo "Erreur d'insertion.";
        }
        $stmt->close();
    } else {
        error_log("Erreur de préparation : " . $conn->error);
        echo "Erreur SQL.";
    }
    $conn->close();

    
}
?>