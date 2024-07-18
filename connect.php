<?php
//Database configuration
include_once 'register.php';
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "swiftclean_db";

//Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//check connection
if ($conn->connect_error){
  die("Connection failed: ". $conn->connect_error);
}

//check input data
function check_Input($data) {
  return htmlspecialchars(stripslashes(trim($data)));
}

//Registration process
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = check_Input($_POST["username"]);
  $email = check_Input($_POST["email"]);
  $password = check_Input($_POST["password"]);

  //input data
  if (empty($username) || empty($email) || empty($password)) {
    echo "All fields are required.";
  } else {
    
    //check password
    $check_pwd = password_hash($password, PASSWORD_BCRYPT);

    //prepare statement
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $check_pwd);

    //Execute the statement
    if ($stmt->execute()) {
      echo "Registration successful";
    }else{
      echo "Error: " . $stmt->error;
    }

    //close the statement
    $stmt->close();
    }

}
//close the connection
$conn->close();
>