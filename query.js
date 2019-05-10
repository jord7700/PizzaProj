function saveData(username, statpizza, stattotalpizza, workhands, workitalians, workshops, workcellars, workcities, workcountries, workcontinents, workspace, worknuclear, workmoap, uphands, upmafia, upmascot, upvineyard, uppizzatropolis, upgovernment, upupa, upmoons, upppp, upgod, upentropy){
	var stats = [statpizza, stattotalpizza];
	var nameStats = ["pizza", "totalpizza"];
	var workers = [workhands, workitalians, workshops, workcellars, workcities, workcountries, workcontinents, workspace, worknuclear, workmoap];
	var nameWorkers = ["hands", "italians", "shops", "cellars", "cities", "countries", "continents", "space", "nuclear", "moap"];
	var upgrades = [uphands, upmafia, upmascot, upvineyard, uppizzatropolis, upgovernment, upupa, upmoons, upppp, upgod, upentropy];
	var nameUpgrades = ["hands", "mafia", "mascot", "vineyard", "pizzatropolis", "government", "upa", "moons", "ppp", "god", "entropy"];

	for(i = 0; i < stats.length; i++){
		var name = username;
		var table = "stats";
		var col = nameStats[i];
		var value = stats[i];
		var type = "post";
		$.get("query.php", {
			username: name,
			table: table,
			col: col,
			type: type,
			value: value
		}, function(data, status) {

		});
	}
	for(i = 0; i < workers.length; i++){
		var name = username;
		var table = "workers";
		var col = nameWorkers[i];
		var value = workers[i];
		var type = "post";
		$.get("query.php", {
			username: name,
			table: table,
			col: col,
			type: type,
			value: value
		}, function(data, status) {

		});
	}
	for(i = 0; i < upgrades.length; i++){
		var name = username;
		var table = "upgrades";
		var col = nameUpgrades[i];
		var value = upgrades[i];
		var type = "post";
		$.get("query.php", {
			username: name,
			table: table,
			col: col,
			type: type,
			value: value
		}, function(data, status) {

		});
	}
}

function getData(username, table, variableName){
	var name = username;
	var table = table;
	var col = variableName;
	var type = "get";
	$.get("query.php", {
		username: name,
		table: table,
		col: col,
		type: type
	}, function(data, status) {
		return data;
	});
}