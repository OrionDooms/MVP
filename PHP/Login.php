<?php
//Start the session
session_start();
//Incude the database configuration file
require_once 'config.php';

//Function to sanitize user input
function sanitizeInput($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}
//Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  //sanitize the email and password inputs
    $email = sanitizeInput($_POST["email"]);
    $password = sanitizeInput($_POST["password"]);

    //check fields are not empty
    if (empty($email) || empty($password)) {
        echo "All fields are required.";
    } else {

      //Prepare SQL statement to select user data
        $stmt = mysqli_prepare($conn, "SELECT id, username, password FROM users WHERE email = ?");
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);

        //Check if a users exists
        if (mysqli_stmt_num_rows($stmt) == 1) {
            mysqli_stmt_bind_result($stmt, $id, $username, $hashedPassword);
            mysqli_stmt_fetch($stmt);

            //Check password againts the stored hashed password
            if (password_verify($password, $hashedPassword)) {
                // Start a new session and save user info
                $_SESSION['id'] = $id;
                $_SESSION['username'] = $username;
                $_SESSION['email'] = $email;

                Header("Location: ../homepage.php");
            } else {
                echo "Invalid password.";
            }
        } else {
            echo "No account found with that email.";
        }
        //close statement
        mysqli_stmt_close($stmt);
    }
}
//close database connection
mysqli_close($conn);
?>
