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

	user = "<div class='divTableRow'><div class='divTableCell'><img src='" + user.avatar + "'></div><div class='divTableCell'>" + 
	user.id + "</div><div class='divTableCell'>" + user.first_name + "</div><div class='divTableCell'>" + user.last_name + "</div><div class='divTableCell'><a href='" + user.page + "'><i class='fas fa-link'></i></a></div></div>";

	return user;
};





