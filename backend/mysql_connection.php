<?php
DEFINE ('DB_HOST','server.uwmsois.com');
DEFINE ('DB_USER','zrbania');
DEFINE ('DB_PASSWORD','MilwaukeeEncryption1997#');
DEFINE ('DB_NAME','zrbania_AngularTemplate');

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

?>