<?php
$dbServer = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'holidaycelebration';
$choice = $_GET['q'];
$conn = mysqli_connect($dbServer, $dbUsername, $dbPassword, $dbName);
$string = "UPDATE `holiday-survey` SET votes=votes + 1 WHERE holiday='$choice'";
mysqli_query($conn, $string);
mysqli_close($conn);

?>