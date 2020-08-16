<?php
$fullName = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comments = $_POST['comments'];

$dbServer = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'holidaycelebration';

$conn = mysqli_connect($dbServer, $dbUsername, $dbPassword, $dbName);
$insertString = "INSERT INTO `customer-info` (name, phone, email, comments) VALUES ('$fullName', '$phone', '$email', '$comments')";
mysqli_query($conn, $insertString);
mysqli_close($conn);
header('Location: home.html');
?>