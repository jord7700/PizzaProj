<?php
include "dbConn.php";
startup();

//
//Startup Functions
//

function getDBConn(){
	
	return $conn;
}

function startup(){
	global $conn;
	$val = $conn->query('select 1 from `stats` LIMIT 1');

	if($val !== FALSE){
		//echo "Table exists<br>";
	}
	else{
		$sql = "create table stats(user varchar(255), pizza bigint, totalpizza bigint);";
		if($conn->query($sql) !== TRUE){
			//echo "Error: Had a hard time creating table 'stats'<br>";
		}else{
			//echo "Table does not exist! Creating Table...<br>";
		}
	}
	
	$val = $conn->query('select 1 from `workers` LIMIT 1');

	if($val !== FALSE){
		//echo "Table exists<br>";
	}
	else{
		$sql = "create table workers(user varchar(255), hands bigint, italians bigint, shops bigint, cellars bigint, cities bigint, countries bigint, continents bigint, space bigint, nuclear bigint, moap bigint);";
		if($conn->query($sql) !== TRUE){
			//echo "Error: Had a hard time creating table 'workers'<br>";
		}else{
			//echo "Table does not exist! Creating Table...<br>";
		}
	}
	
	$val = $conn->query('select 1 from `upgrades` LIMIT 1');

	if($val !== FALSE){
		//echo "Table exists<br>";
	}
	else{
		$sql = "create table upgrades(user varchar(255), hands bit, mafia bit, mascot bit, vineyard bit, pizzatropolis bit, government bit, upa bit, moons bit, ppp bit, god bit, entropy bit);";
		if($conn->query($sql) !== TRUE){
			//echo "Error: Had a hard time creating table 'workers'<br>";
		}else{
			//echo "Table does not exist! Creating Table...<br>";
		}
	}
}

//
//Add User Functions
//

function addUser($user){
	global $conn;
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

//
//Remove User Functions
//

function removeUser($user){
	global $conn;
	$sql = "Delete from stats where user='$user'";
	$conn->query($sql);
	$sql = "Delete from workers where user='$user'";
	$conn->query($sql);
	$sql = "Delete from upgrades where user='$user'";
	$conn->query($sql);
}

function removeAll(){
	global $conn;
	$sql = "Delete from stats";
	$conn->query($sql);
	$sql = "Delete from workers";
	$conn->query($sql);
	$sql = "Delete from upgrades";
	$conn->query($sql);
}

//
//Main Getters and Setters
//

function getFromStats($user, $value){
	global $conn;
	$sql = "select $value from stats where user='$user'";
	$result = $conn->query($sql);
	while($row = $result->fetch_assoc()){
		return $row[$value];
	}
}

function setStats($user, $value, $amount){
	global $conn;
	$sql = "update stats set $value=$amount where user='$user'";
	$conn->query($sql);
}

function getFromWorkers($user, $value){
	global $conn;
	$sql = "select $value from workers where user='$user'";
	$result = $conn->query($sql);
	while($row = $result->fetch_assoc()){
		return $row[$value];
	}
}

function setWorkers($user, $value, $amount){
	global $conn;
	$sql = "update workers set $value=$amount where user='$user'";
	$conn->query($sql);
}

function getFromUpgrades($user, $value){
	global $conn;
	$sql = "select $value from upgrades where user='$user'";
	$result = $conn->query($sql);
	while($row = $result->fetch_assoc()){
		return $row[$value];
	}
}

function setUpgrades($user, $value, $amount){
	global $conn;
	$sql = "update upgrades set $value=$amount where user='$user'";
	$conn->query($sql);
}

//
//Getters and Setters for Stats
//

function getStatsCurrentPizza($user){
	$value = "pizza";
	return getFromStats($user, $value);
}

function setStatsCurrentPizza($user, $amount){
	$value = "pizza";
	setStats($user, $value, $amount);
}

function getStatsTotalPizza($user){
	$value = "totalpizza";
	return getFromStats($user, $value);
}

function setStatsTotalPizza($user, $amount){
	$value = "totalpizza";
	setStats($user, $value, $amount);
}

//
//Getters and Setters for Workers
//

function getWorkersHands($user){
	$value = "hands";
	return getFromWorkers($user, $value);
}

function setWorkersHands($user, $amount){
	$value = "hands";
	setWorkers($user, $value, $amount);
}

function getWorkersItalians($user){
	$value = "italians";
	return getFromWorkers($user, $value);
}

function setWorkersItalians($user, $amount){
	$value = "italians";
	setWorkers($user, $value, $amount);
}

function getWorkersShops($user){
	$value = "shops";
	return getFromWorkers($user, $value);
}

function setWorkersShops($user, $amount){
	$value = "shops";
	setWorkers($user, $value, $amount);
}

function getWorkersCellars($user){
	$value = "cellars";
	return getFromWorkers($user, $value);
}

function setWorkersCellars($user, $amount){
	$value = "cellars";
	setWorkers($user, $value, $amount);
}

function getWorkersCities($user){
	$value = "cities";
	return getFromWorkers($user, $value);
}

function setWorkersCities($user, $amount){
	$value = "cities";
	setWorkers($user, $value, $amount);
}

function getWorkersCountries($user){
	$value = "countries";
	return getFromWorkers($user, $value);
}

function setWorkersCountries($user, $amount){
	$value = "countries";
	setWorkers($user, $value, $amount);
}

function getWorkersContinents($user){
	$value = "continents";
	return getFromWorkers($user, $value);
}

function setWorkersContinents($user, $amount){
	$value = "continents";
	setWorkers($user, $value, $amount);
}

function getWorkersSpace($user){
	$value = "space";
	return getFromWorkers($user, $value);
}

function setWorkersSpace($user, $amount){
	$value = "space";
	setWorkers($user, $value, $amount);
}

function getWorkersNuclear($user){
	$value = "nuclear";
	return getFromWorkers($user, $value);
}

function setWorkersNuclear($user, $amount){
	$value = "nuclear";
	setWorkers($user, $value, $amount);
}

function getWorkersMOAP($user){
	$value = "moap";
	return getFromWorkers($user, $value);
}

function setWorkersMOAP($user, $amount){
	$value = "moap";
	setWorkers($user, $value, $amount);
}

//
//Getters and Setters for Upgrades
//

function getUpgradesHands($user){
	$value = "hands";
	return getFromUpgrades($user, $value);
}

function setUpgradesHands($user, $amount){
	$value = "hands";
	setUpgrades($user, $value, $amount);
}

function getUpgradesMafia($user){
	$value = "mafia";
	return getFromUpgrades($user, $value);
}

function setUpgradesMafia($user, $amount){
	$value = "mafia";
	setUpgrades($user, $value, $amount);
}

function getUpgradesMascot($user){
	$value = "mascot";
	return getFromUpgrades($user, $value);
}

function setUpgradesMascot($user, $amount){
	$value = "mascot";
	setUpgrades($user, $value, $amount);
}

function getUpgradesVineyard($user){
	$value = "vineyard";
	return getFromUpgrades($user, $value);
}

function setUpgradesVineyard($user, $amount){
	$value = "vineyard";
	setUpgrades($user, $value, $amount);
}

function getUpgradesTropolis($user){
	$value = "pizzatropolis";
	return getFromUpgrades($user, $value);
}

function setUpgradesTropolis($user, $amount){
	$value = "pizzatropolis";
	setUpgrades($user, $value, $amount);
}

function getUpgradesGovernment($user){
	$value = "government";
	return getFromUpgrades($user, $value);
}

function setUpgradesGovernment($user, $amount){
	$value = "government";
	setUpgrades($user, $value, $amount);
}

function getUpgradesUPA($user){
	$value = "upa";
	return getFromUpgrades($user, $value);
}

function setUpgradesUPA($user, $amount){
	$value = "upa";
	setUpgrades($user, $value, $amount);
}

function getUpgradesMoons($user){
	$value = "moons";
	return getFromUpgrades($user, $value);
}

function setUpgradesMoons($user, $amount){
	$value = "moons";
	setUpgrades($user, $value, $amount);
}

function getUpgradesPPP($user){
	$value = "ppp";
	return getFromUpgrades($user, $value);
}

function setUpgradesPPP($user, $amount){
	$value = "ppp";
	setUpgrades($user, $value, $amount);
}

function getUpgradesGod($user){
	$value = "god";
	return getFromUpgrades($user, $value);
}

function setUpgradesGod($user, $amount){
	$value = "god";
	setUpgrades($user, $value, $amount);
}

function getUpgradesEntropy($user){
	$value = "entropy";
	return getFromUpgrades($user, $value);
}

function setUpgradeEntropy($user, $amount){
	$value = "entropy";
	setUpgrades($user, $value, $amount);
}
?>