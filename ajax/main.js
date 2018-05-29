'use strict';



function loadDoc(){

	document.getElementById("table_id").style.display = "none";

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var obj = JSON.parse(this.responseText);

			document.getElementById("table_id").style.display = "block";
			document.getElementById("image").style.display = "none";

			for(var i = 0 ; i < obj.length ; i++){

				document.getElementById("tbody").innerHTML += "<tr><td>" +
				 obj[i].login + "</td><td>" + obj[i].id + "</td><td>" + obj[i].avatar_url + "</td><td>" + 
				 obj[i].url + "</td><td>" + obj[i].events_url + "</td><td>" + obj[i].followers_url + "</td><td>" + 
				 obj[i].following_url + "</td><td>" + obj[i].gists_url + "</td><td>" + obj[i].html_url + "</td><td>" + 
				 obj[i].organizations_url + "</td><td>" + obj[i].received_events_url + "</td><td>" + obj[i].repos_url + "</td><td>" + 
				 obj[i].site_admin + "</td><td>" + obj[i].starred_url + "</td><td>" + obj[i].subscriptions_url + "</td><td>" + 
				 obj[i].type + "</td></tr>";
			}
			
		}
	};

	xhttp.open("GET","https://api.github.com/users?since=135", true);
	xhttp.send();

}


loadDoc();