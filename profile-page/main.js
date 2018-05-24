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

	function validation(event){

		event.preventDefault();

		profileForm.name1 = name1.value;
		profileForm.message = message.value;
		profileForm.location = location.value;
		profileForm.website = website.value;
		profileForm.github = github.value;
		profileForm.linkedin = linkedin.value;
		profileForm.twitter = twitter.value;

		fieldName.style.display = "none";

		if(name1.value === ""){
			fieldName.style.display = "block";
			fieldName.style.color = "red";
			fieldName.innerHTML = 'Complete the field "Name"';
			name1.style.marginTop = "0px";
		}

		fieldMessage.style.display = "none";

		if(message.value === ""){
			fieldMessage.style.display = "block";
			fieldMessage.style.color = "red";
			fieldMessage.innerHTML = 'Complete the field "Message"';
			message.style.marginTop = "0px";
		}

		fieldLocation.style.display = "none";

		if(location.value === ""){
			fieldLocation.style.display = "block";
			fieldLocation.style.color = "red";
			fieldLocation.innerHTML = 'Complete the field "Location"';
			document.getElementById("marginLoc").style.marginTop = "20px";
		}

		fieldWebsite.style.display = "none";

		if(website.value ===""){
			fieldWebsite.style.display = "block";
			fieldWebsite.style.color = "red";
			fieldWebsite.innerHTML = 'Complete the field "Website"';
			document.getElementById("marginWeb").style.marginTop = "17px";
		}

		fieldGithub.style.display = "none";

		if(github.value === ""){
			fieldGithub.style.display = "block";
			fieldGithub.style.color = "red";
			fieldGithub.innerHTML = 'Complete the field "Github"';
			document.getElementById("marginGit").style.marginTop = "17px";
		}

		fieldLinkedin.style.display = "none";

		if(linkedin.value === ""){
			fieldLinkedin.style.display = "block";
			fieldLinkedin.style.color = "red";
			fieldLinkedin.innerHTML = 'Complete the field "Linkedin"';
			document.getElementById("marginLink").style.marginTop = "17px";
		}

		fieldTwitter.style.display = "none";

		if(twitter.value === ""){
			fieldTwitter.style.display = "block";
			fieldTwitter.style.color = "red";
			fieldTwitter.innerHTML = 'Complete the field "Twitter"';
			document.getElementById("marginTwi").style.marginTop = "17px";
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

