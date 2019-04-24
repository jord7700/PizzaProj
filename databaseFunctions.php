<?php


startup();

function startup(){
	include "dbConn.php";
	$val = $conn->query('select 1 from `test` LIMIT 1');

	if($val !== FALSE){
		echo "Table exists";
	}
	else{
		$sql = "create table test(lname varchar(255), fname varchar(255));";
		if($conn->query($sql) === TRUE){
			echo "Success: Thanks for that wholesome information";
		}
		else{
			echo "Error: That information was incorrect";
		}
		echo "Table does not exist! Creating Table...";
	}
}
function test($username){
	$sql = "Insert into person (Name, Phone_Number, Address) values ('$name','$phonenumber','$address')";	
}
?>