<?php
//Database configuration
$DB_SERVER = "localhost";
$DB_USERNAME = "root";
$DB_PASSWORD = '';
$DB_NAME = "swiftclean";

// Attempt to connect to MySQL database
$conn = mysqli_connect($DB_SERVER, $DB_USERNAME, $DB_PASSWORD, $DB_NAME);

// Check connection
if (mysqli_connect_error()) {
  die ("Connection failed!");
}
echo "connection success!";
?>