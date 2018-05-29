'use strict';

var firstInput = document.getElementById("firstInput");
var secondInput = document.getElementById("secondInput");

var missFirstField = document.getElementById("missFirstField");
var missSecondField = document.getElementById("missSecondField");

document.getElementById("form").addEventListener("submit", validation);

function validation(event){

	event.preventDefault();

	if(firstInput.value === ""){

		missFirstField.innerHTML = "Put a number, please"; 
		missFirstField.style.display = "block";
		missFirstField.style.color = "red";
		missFirstField.style.marginLeft = "10px";
	}

	if(secondInput.value === ""){

		missSecondField.innerHTML = "Put a number, please"; 
		missSecondField.style.display = "block";
		missSecondField.style.color = "red";
		missSecondField.style.marginLeft = "10px";
	}

	if(firstInput.value === "" || secondInput.value == ""){

		return false;
	}

	missFirstField.style.display = "none";
	missSecondField.style.display = "none";
	
	return true;
}
