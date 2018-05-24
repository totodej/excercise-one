'use strict';

window.onload = function(){

	document.getElementById("form").addEventListener("submit", validation);
	document.getElementById("cancel").addEventListener("click", refresh);

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

	var profileForm = {
			name1: "",
			message: "",
			location: "",
			website: "",
			github: "",
			linkedin: "",
			twitter: ""
		};


	fieldName.style.display = "none";
	fieldMessage.style.display = "none";
	fieldLocation.style.display = "none";
	fieldWebsite.style.display = "none";
	fieldGithub.style.display = "none";
	fieldLinkedin.style.display = "none";
	fieldTwitter.style.display = "none";

	function validation(event){

		event.preventDefault();

		profileForm.name1 = name1.value;
		profileForm.message = message.value;
		profileForm.location = location.value;
		profileForm.website = website.value;
		profileForm.github = github.value;
		profileForm.linkedin = linkedin.value;
		profileForm.twitter = twitter.value;

		if(name1.value === ""){
			fieldName.style.display = "block";
			fieldName.style.color = "red";
			fieldName.innerHTML = 'Complete the field "Name"';
			name1.style.marginTop = "0px";
		}

		if(message.value === ""){
			fieldMessage.style.display = "block";
			fieldMessage.style.color = "red";
			fieldMessage.innerHTML = 'Complete the field "Message"';
			message.style.marginTop = "0px";
		}

		if(location.value === ""){
			fieldLocation.style.display = "block";
			fieldLocation.style.color = "red";
			fieldLocation.innerHTML = 'Complete the field "Location"';
			fieldLocation.style.marginLeft = "134px";
		}

		if(website.value ===""){
			fieldWebsite.style.display = "block";
			fieldWebsite.style.color = "red";
			fieldWebsite.innerHTML = 'Complete the field "Website"';
			fieldWebsite.style.marginLeft = "134px";
		}

		if(github.value === ""){
			fieldGithub.style.display = "block";
			fieldGithub.style.color = "red";
			fieldGithub.innerHTML = 'Complete the field "Github"';
			fieldGithub.style.marginLeft = "134px";
		}

		if(linkedin.value === ""){
			fieldLinkedin.style.display = "block";
			fieldLinkedin.style.color = "red";
			fieldLinkedin.innerHTML = 'Complete the field "Linkedin"';
			fieldLinkedin.style.marginLeft = "134px";
		}

		if(twitter.value === ""){
			fieldTwitter.style.display = "block";
			fieldTwitter.style.color = "red";
			fieldTwitter.innerHTML = 'Complete the field "Twitter"';
			fieldTwitter.style.marginLeft = "134px";
		}
		
		if(name1.value === "" || message.value === "" || location.value === "" || website.value ==="" || github.value === "" || linkedin.value === "" || twitter.value === ""){
			
			return false;
		}

		localStorage.setItem("Profile-Form",JSON.stringify(profileForm));

		return true;
	}



	function refresh(){

		window.location.reload(false);

		localStorage.removeItem("Profile-Form");

	}








}

