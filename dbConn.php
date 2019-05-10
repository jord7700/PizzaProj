<?php
    $servername = "127.0.0.1";
    $dbname = "dealer";
    $username = "root";
    $password = "gmatroot123";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if($conn->connect_error){
die("Connection failed: ". $conn->connect_error);
}
?>
