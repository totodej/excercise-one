'use strict';

function loadDoc(){

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET","https://developer.github.com/v3/users/#get-all-users", true);
	xhttp.send();


}