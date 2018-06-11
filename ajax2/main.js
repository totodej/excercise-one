'use strict';



	document.getElementById("show").addEventListener("click", showResult);

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

					 	obj += "<tr><td><img src='" + members[i].user.avatar + "'></td><td><img src='" + members[i].user.avatar_thumbnail 
					 	+ "'></td><td>" + members[i].user.class + "</td><td>" + members[i].user.first_name + "</td><td>" + 
					 	members[i].user.id + "</td><td>" + members[i].user.last_name + "</td><td><a href='" + members[i].user.page + "'>Link</a></td><td>" 
					 	+ members[i].user.slug + "</td><td><a href='" + members[i].user.uri + "'>Uri</a></td></tr>";
					 	
				}

				document.getElementById("tbody").innerHTML = obj;

				document.getElementById("display").style.display = "block";
				document.getElementById("display").style.border = "solid 10px black";
				document.getElementById("display").style.borderRadius = "20px";


				document.getElementById("image").style.display = "none";

				localStorage.setItem("data-gouv",xhttp.responseText);
				
				
				
			};
		};
		xhttp.open("GET", "https://www.data.gouv.fr/api/1/organizations/premier-ministre/", true);
		xhttp.send();


	};



