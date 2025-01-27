<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Connexion à la base de données
    $conn = new mysqli('localhost', 'root', '', 'servpad');

    if ($conn->connect_error) {
        error_log("Connection failed: " . $conn->connect_error);
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        error_log("New account created successfully for user: $username");
        header("Location: Connexion.html");
        exit();
    } else {
        error_log("Error: " . $sql . " - " . $conn->error);
        echo "Erreur: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>