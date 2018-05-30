'use strict';

var firstInput = document.getElementById("firstInput");
var secondInput = document.getElementById("secondInput");

var missFirstField = document.getElementById("missFirstField");
var missSecondField = document.getElementById("missSecondField");

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

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


document.getElementById("plus").addEventListener("click", plusFunction);

function plusFunction(){

	var plusResult = Number(firstInput.value) + Number(secondInput.value);
	document.getElementById("display").innerHTML = plusResult;
	localStorage.setItem("Result", JSON.stringify(Number(firstInput.value) + " + " + Number(secondInput.value) + " = " + plusResult));
	document.getElementById("operationsHistory").innerHTML += localStorage.getItem("Result") + "<br>" ;
};


document.getElementById("minus").addEventListener("click", minusFunction);

function minusFunction(){

	var minusResult = Number(firstInput.value) - Number(secondInput.value);
	document.getElementById("display").innerHTML = minusResult;
	localStorage.setItem("Result", JSON.stringify(Number(firstInput.value) + " - " + Number(secondInput.value) + " = " + minusResult));
	document.getElementById("operationsHistory").innerHTML += localStorage.getItem("Result") + "<br>" ;

};


document.getElementById("multiply").addEventListener("click", multiplyFunction);

function multiplyFunction(){

	var multiplyResult = Number(firstInput.value) * Number(secondInput.value);
	document.getElementById("display").innerHTML = multiplyResult;
	localStorage.setItem("Result", JSON.stringify(Number(firstInput.value) + " * " + Number(secondInput.value) + " = " + multiplyResult));	
	document.getElementById("operationsHistory").innerHTML += localStorage.getItem("Result") + "<br>" ;

};


document.getElementById("divide").addEventListener("click", divideFunction);
	
function divideFunction(){

	var divideResult = Number(firstInput.value) / Number(secondInput.value);
	document.getElementById("display").innerHTML = divideResult;
	localStorage.setItem("Result", JSON.stringify(Number(firstInput.value) + " / " + Number(secondInput.value) + " = " + divideResult));
	document.getElementById("operationsHistory").innerHTML += localStorage.getItem("Result") + "<br>" ;
};

document.getElementById("clear").addEventListener("click", clear);

function clear(){

	window.location.reload(false);

	localStorage.removeItem("Result");
}

























