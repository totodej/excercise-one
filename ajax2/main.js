'use strict';


var show = document.querySelector("#show");
show.addEventListener("click", handleShowClick);

var loader = document.querySelector("#loader");
loader.style.display = "none";


function handleShowClick() {
	showResult();
	clearTable();
}

function showResult(){

	var xhttp = new XMLHttpRequest();

	loader.style.display = "block";
		
	xhttp.onreadystatechange = function(){

		if(this.readyState == 4 && this.status == 200){

			var members = "";
			var response = JSON.parse(xhttp.responseText);
			var users = response;

			for(var i = 0 ; i < users.length ; i++){
				var user = users[i];
				members += renderMember(user);	 

			}

			clearTable();

			document.getElementById("tbody").innerHTML = members;

			display();

			var detailButtons = document.querySelectorAll(".details");
			for (var i = 0 ; i < detailButtons.length;i++) {
				var currentDetailBtn = detailButtons[i];
				
				currentDetailBtn.addEventListener('click', function(e){
					var username = this.getAttribute('data-username');
					fetchAndRenderUserDetails(username);

				});
			}
			saveResponse(xhttp.responseText);				
				
		};
	};
	xhttp.open("GET", "https://api.github.com/users", true);
	xhttp.send();
};

function clearTable(){
	document.getElementById("tbody").innerHTML = "";
};


function display(){
	loader.style.display = "none";
	// document.getElementsByClassName("user")[0].style.display = "block";
};

function renderMember(user){
	user = "<div class='user'><div id='picture'><img src='" + user.avatar_url + "'></div><div class='informations'><p>" + user.login 
	+ "</p><div class='fewInformations'></div><a href='" + user.url + 
	"'><i class='fas fa-user'></i>  See the Profil Page</a></div><button class='details' data-username='"+ user.login +"'>More Details</button></div>";

	return user;
};


function fetchAndRenderUserDetails(login){
	var xhttp2 = new XMLHttpRequest();

	xhttp2.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){

			var user = JSON.parse(xhttp2.responseText);
			var userDetailsHtml = "<p>Name : " + user.login + "</p><p>Email : " + user.email +  "</p><p>Company : " + user.company + "</p>"; 					
 			
			// render user details
			var detailButton = document.querySelector('button[data-username="' + user.login +'"]');
			var fewInformationsElement = detailButton.parentNode.querySelector('.fewInformations');
			fewInformationsElement.innerHTML = userDetailsHtml;
		}
				
	};
	xhttp2.open("GET", "https://api.github.com/users/" + login ,true);
	
	xhttp2.send();
};

function userClickEventHandler (login) {

	var details = document.querySelectorAll(".details");
	var fewInformations = document.querySelectorAll(".fewInformations");

	for(var y = 0 ; y < details.length ; y++ ){

		var detail = details[y];

		detail = login;

		document.querySelectorAll(".user")[y].style.height = "450px";
 		document.querySelectorAll(".fewInformations")[y].innerHTML = fewInformations;
		
	}
	
	console.log(detail);

}

function saveResponse(response){
   localStorage.setItem("data-gouv",response);
};




































