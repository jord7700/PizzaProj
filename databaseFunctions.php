<?php

include "dbConn.php";

startup($conn);
addUser($conn, "Default");
//removeAll($conn);

function startup($conn){
	$val = $conn->query('select 1 from `stats` LIMIT 1');

	if($val !== FALSE){
		echo "Table exists<br>";
	}
	else{
		$sql = "create table stats(user varchar(255), pizza bigint, totalpizza bigint);";
		if($conn->query($sql) !== TRUE){
			echo "Error: Had a hard time creating table 'stats'<br>";
		}else{
			echo "Table does not exist! Creating Table...<br>";
		}
	}
	
	$val = $conn->query('select 1 from `workers` LIMIT 1');

	if($val !== FALSE){
		echo "Table exists<br>";
	}
	else{
		$sql = "create table workers(user varchar(255), hands bigint, italians bigint, shops bigint, cellars bigint, cities bigint, countries bigint, continents bigint, space bigint, nuclear bigint, moap bigint);";
		if($conn->query($sql) !== TRUE){
			echo "Error: Had a hard time creating table 'workers'<br>";
		}else{
			echo "Table does not exist! Creating Table...<br>";
		}
	}
	
	$val = $conn->query('select 1 from `upgrades` LIMIT 1');

	if($val !== FALSE){
		echo "Table exists<br>";
	}
	else{
		$sql = "create table upgrades(user varchar(255), hands bit, mafia bit, mascot bit, vineyard bit, pizzatropolis bit, government bit, upa bit, moons bit, ppp bit, god bit, entropy bit);";
		if($conn->query($sql) !== TRUE){
			echo "Error: Had a hard time creating table 'workers'<br>";
		}else{
			echo "Table does not exist! Creating Table...<br>";
		}
	}
}

function addUser($conn, $user){
	$sql = "Select user from stats where user='$user'";
	$result = $conn->query($sql);
	if($result->num_rows < 1){
		$sql = "Insert into stats (user, pizza, totalpizza) values ('$user',0,0)";
		if($conn->query($sql) !== TRUE){
				echo "Error: could not create stats<br>";
		}
	}
	
	$sql = "Select user from workers where user='$user'";
	$result = $conn->query($sql);
	if($result->num_rows < 1){
		$sql = "Insert into workers (user, hands, italians, shops, cellars, cities, countries, continents, space, nuclear, moap) values ('$user',0,0,0,0,0,0,0,0,0,0)";
		if($conn->query($sql) !== TRUE){
				echo "Error: could not create workers<br>";
		}
	}
	
	$sql = "Select user from upgrades where user='$user'";
	$result = $conn->query($sql);
	if($result->num_rows < 1){
		$sql = "Insert into upgrades (user, hands, mafia, mascot, vineyard, pizzatropolis, government, upa, moons, ppp, god, entropy) values ('$user',0,0,0,0,0,0,0,0,0,0,0)";
		if($conn->query($sql) !== TRUE){
				echo "Error: could not create upgrades<br>";
		}
	}
}

function removeAll($conn){
	$sql = "Delete from stats";
	$conn->query($sql);
	$sql = "Delete from workers";
	$conn->query($sql);
	$sql = "Delete from upgrades";
	$conn->query($sql);
}

function getFromDB($user){
	$sql = "Insert into person (Name, Phone_Number, Address) values ('$name','$phonenumber','$address')";	
}
?>