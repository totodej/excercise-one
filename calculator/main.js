'use strict';

var firstInput = document.getElementById("firstInput");
var secondInput = document.getElementById("secondInput");

var missFirstField = document.getElementById("missFirstField");
var missSecondField = document.getElementById("missSecondField");

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");


/******************** VALIDATION ********************/

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

	if(firstInput.value === "" || secondInput.value === ""){

		return false;
	}

	missFirstField.style.display = "none";
	missSecondField.style.display = "none";


		return true;
};

/******************** OPERATIONS ********************/

document.getElementById("plus").addEventListener("click", plusFunction);

function plusFunction(){

	var date = new Date();
	var plusResult = Number(firstInput.value) + Number(secondInput.value);
	var plusResultDecimal = plusResult.toFixed(2);
	document.getElementById("display").innerHTML = plusResultDecimal;
	localStorage.setItem("Result", JSON.stringify(Number(firstInput.value) + " + " + Number(secondInput.value) + " = " + plusResultDecimal));
	document.getElementById("operationsHistory").innerHTML += "<br>" + localStorage.getItem("Result") + "<br>" + date.toLocaleDateString() + " - " + date.toLocaleTimeString() + "<br><br>" ;
};


document.getElementById("minus").addEventListener("click", minusFunction);

function minusFunction(){

	var date = new Date();
	var minusResult = Number(firstInput.value) - Number(secondInput.value);
	var minusResultDecimal = minusResult.toFixed(2);
	document.getElementById("display").innerHTML = minusResultDecimal;
	localStorage.setItem("Result", JSON.stringify(Number(firstInput.value) + " - " + Number(secondInput.value) + " = " + minusResultDecimal));
	document.getElementById("operationsHistory").innerHTML +=  "<br>" + localStorage.getItem("Result") + "<br>" + date.toLocaleDateString() + " - " + date.toLocaleTimeString() + "<br><br>" ;

};


document.getElementById("multiply").addEventListener("click", multiplyFunction);

function multiplyFunction(){

	var date = new Date();
	var multiplyResult = Number(firstInput.value) * Number(secondInput.value);
	var multiplyResultDecimal = multiplyResult.toFixed(2);
	document.getElementById("display").innerHTML = multiplyResult;
	localStorage.setItem("Result", JSON.stringify(Number(firstInput.value) + " * " + Number(secondInput.value) + " = " + multiplyResultDecimal));	
	document.getElementById("operationsHistory").innerHTML +=  "<br>" + localStorage.getItem("Result") + "<br>" + date.toLocaleDateString() + " - " + date.toLocaleTimeString() + "<br><br>" ;

};


document.getElementById("divide").addEventListener("click", divideFunction);
	
function divideFunction(){

	var date = new Date();
	var divideResult = Number(firstInput.value) / Number(secondInput.value);
	var divideResultDecimal = divideResult.toFixed(2);
	document.getElementById("display").innerHTML = divideResultDecimal;
	localStorage.setItem("Result", JSON.stringify(Number(firstInput.value) + " / " + Number(secondInput.value) + " = " + divideResultDecimal));
	document.getElementById("operationsHistory").innerHTML +=  "<br>" + localStorage.getItem("Result") + "<br>" + date.toLocaleDateString() + " - " + date.toLocaleTimeString() + "<br><br>" ;
};

/******************** REFRESH ********************/

document.getElementById("refreshFields").addEventListener("click", refreshFields);

function refreshFields(){

	document.getElementById("firstInput").value = "";
	document.getElementById("secondInput").value = "";
	document.getElementById("display").innerHTML = "";
	missFirstField.style.display = "none";
	missSecondField.style.display = "none";

	localStorage.removeItem("Result");
}

document.getElementById("refreshOpeHistory").addEventListener("click", refreshOpeHistory);

function refreshOpeHistory(){

	var idHistory = document.getElementById("operationsHistory");
	idHistory.innerHTML = "";
}





























