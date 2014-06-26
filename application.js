$(document).ready(function(){
	$("a").click(function(event) {
		alert("It's a link with an alert! Cool!");
	})

	$("#intro").on("click", function() {
		alert("Yes secret clickable things");
	})

});