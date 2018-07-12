'use strict';


document.getElementById("show").addEventListener("click", showResult);
document.getElementById("show").addEventListener("click", clearTable);

document.getElementById("image").style.display = "none";
document.getElementById("display").style.display = "none";


function showResult(){

	var xhttp = new XMLHttpRequest();

	document.getElementById("image").style.display = "block";
		
	xhttp.onreadystatechange = function(){

		if(this.readyState == 4 && this.status == 200){

			var obj = document.getElementById("tbody").innerHTML;
			var response = JSON.parse(xhttp.responseText);
			var members = response.members;

			for(var i = 0 ; i < members.length ; i++){
				var member = members[i];
				obj += renderMember(member.user);	 	
			}

			clearTable();

			document.getElementById("tbody").innerHTML = obj;

			display();
			saveResponse(xhttp.responseText);				
				
		};
	};
	xhttp.open("GET", "https://www.data.gouv.fr/api/1/organizations/premier-ministre/", true);
	xhttp.send();

};



function clearTable(){

	document.getElementById("tbody").innerHTML = "";

};


function display(){
			
			document.getElementById("image").style.display = "none";
			document.getElementById("display").style.display = "block";
};


function saveResponse(response){

	localStorage.setItem("data-gouv",response);
};


function renderMember(user){

	user = "<tr><td><img src='" + user.avatar + "'></td><td><img src='" + user.avatar_thumbnail 
	+ "'></td><td>" + user.class + "</td><td>" + user.first_name + "</td><td>" + 
	user.id + "</td><td>" + user.last_name + "</td><td><a href='" + user.page + "'><i class='fas fa-link'></i></a></td><td>" 
	+ user.slug + "</td><td><a href='" + user.uri + "'>Uri</a></td></tr>";

	return user;
};





