//$.get("databaseFunction.php", function(data, status){
//      alert("Data: " + data + "\nStatus: " + status);
//});


$(document).ready(function(){
	$("input#get").click(function(){
		var name = $("input#name").val();
		var table = $("input#table").val();
		var col = $("input#col").val();
		var type = "get";
		$.get("query.php", {
			username: name,
			table: table,
			col: col,
			type: type
		}, function(data, status) {
			$("#test").html(data);
		});
	});
	$("input#post").click(function(){
		var name = $("input#name").val();
		var table = $("input#table").val();
		var col = $("input#col").val();
		var value = $("input#value").val();
		var type = "post";
		$.get("query.php", {
			username: name,
			table: table,
			col: col,
			type: type,
			value: value
		}, function(data, status) {
			$("#test").html(data);
		});
	});
});