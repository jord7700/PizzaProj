<?php
	include "databaseFunctions.php";
	$username = "";
	$table = "";
	$col = "";
	$type = "";
	$output = "";

	if(isset($_GET['username'])){
		$username = $_GET['username'];
	}
	
	if(isset($_GET['table'])){
		$table = $_GET['table'];
	}
	
	if(isset($_GET['col'])){
		$col = $_GET['col'];
	}
	
	if(isset($_GET['type'])){
		$type = $_GET['type'];
	}
	
	if($type == "get"){
		addUser($username);
		if($table == "upgrades"){
			$output = getFromUpgrades($username, $col);
		}
		if($table == "workers"){
			$output = getFromWorkers($username, $col);
		}
		if($table == "stats"){
			$output = getFromStats($username, $col);
		}
		echo $output;
	}
	
	if($type == "post"){
		addUser($username);
		$value = "";
		if(isset($_GET['value'])){
			$value = $_GET['value'];
		}		
		if($table == "upgrades"){
			$output = setUpgrades($username, $col, $value);
		}
		if($table == "workers"){
			$output = setWorkers($username, $col, $value);
		}
		if($table == "stats"){
			$output = setStats($username, $col, $value);
		}
		echo $output;
	}
?>