<?php
session_start();
require_once 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST["carType"]) && isset($_POST["services"])){
    $carType = $_POST["carType"];
    $selectedServices = $_POST["services"];
    $userId = $_SESSION["id"];
    $totalPrice = 0;
    
    foreach ($selectedServices as $service) {
        $price = $_POST[$service . '_' . $carType];
        $totalPrice += $price;
    }
    
    // prepare an SQL statement to insert booking data
    $stmt = mysqli_prepare($conn, "INSERT INTO bookings (user_id, car_type, services, total_price) VALUE (?, ?, ?, ?)");$servicesString = implode(", ", $selectedServices);
    mysqli_stmt_bind_param($stmt, "issd", $userId, $carType, $servicesString, $totalPrice);

  if (mysqli_stmt_execute($stmt)) {
    echo "booking successful!";
  } else {
    echo "Error: " . mysqli_error($conn);
  }
  mysqli_stmt_close($stmt);
}else{
  echo "please select car type and services.";
}
}
mysqli_close($conn);
?>