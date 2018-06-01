'use strict';

document.getElementById("show").addEventListener("click", showResult);

document.getElementById("image").style.display = "none";

var cats = {
	pictures : ""
};


function showResult(){

	var xhttp = new XMLHttpRequest();

	document.getElementById("image").style.display = "block";

	xhttp.onreadystatechange = function(){

		if(this.readyState == 4 && this.status == 200){

			document.getElementById("display").innerHTML = xhttp.responseText;
			document.getElementById("display").style.border = "solid 10px black";
			document.getElementById("display").style.borderRadius = "20px";

			document.getElementById("image").style.display = "none";

			localStorage.setItem("Cats",cats);

			console.log(cats);
		};
	};
	xhttp.open("GET", "http://thecatapi.com/api/images/get?format=xml&results_per_page=20", true);
	xhttp.send();

};

