'use strict';

window.onload = function(){

	document.getElementById("form").addEventListener("submit", validation);

	var name1 = document.getElementById("name");
	var message = document.getElementById("message");
	var location = document.getElementById("location");
	var website = document.getElementById("website");
	var github = document.getElementById("github");
	var linkedin = document.getElementById("linkedin");
	var twitter = document.getElementById("twitter");

	var fieldName = document.getElementById("fieldName");
	var fieldMessage = document.getElementById("fieldMessage");
	var fieldLocation = document.getElementById("fieldLocation");
	var fieldWebsite = document.getElementById("fieldWebsite");
	var fieldGithub = document.getElementById("fieldGithub");
	var fieldLinkedin = document.getElementById("fieldLinkedin");
	var fieldTwitter = document.getElementById("fieldTwitter");

	fieldName.style.display = "none";
	fieldMessage.style.display = "none";
	fieldLocation.style.display = "none";
	fieldWebsite.style.display = "none";
	fieldGithub.style.display = "none";
	fieldLinkedin.style.display = "none";
	fieldTwitter.style.display = "none";

	function validation(event){

		event.preventDefault();


		if(name1.value === ""){
			fieldName.style.display = "block";
			fieldName.style.color = "red";
			name1.style.marginTop = "0px";
			
		}

		if(message.value === ""){
			fieldMessage.style.display = "block";
			fieldMessage.style.color = "red";
			message.style.marginTop = "0px";
		}

		if(location.value === ""){
			fieldLocation.style.display = "block";
			fieldLocation.style.color = "red";
			fieldLocation.style.marginLeft = "134px";
		}

		if(website.value ===""){
			fieldWebsite.style.display = "block";
			fieldWebsite.style.color = "red";
			fieldWebsite.style.marginLeft = "134px";
		}

		if(github.value === ""){
			fieldGithub.style.display = "block";
			fieldGithub.style.color = "red";
			fieldGithub.style.marginLeft = "134px";
		}

		if(linkedin.value === ""){
			fieldLinkedin.style.display = "block";
			fieldLinkedin.style.color = "red";
			fieldLinkedin.style.marginLeft = "134px";
		}

		if(twitter.value === ""){
			fieldTwitter.style.display = "block";
			fieldTwitter.style.color = "red";
			fieldTwitter.style.marginLeft = "134px";
		}
		console.log(name1.value);

	}









}

