'use strict';

document.getElementById("btn").addEventListener("click", myFunction);

function myFunction(){

	
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

   if(regex.test(email.value))
   {
      
      document.getElementById("form").style.display = "none";
      document.querySelector("h1").style.display = "none";
      var str = document.getElementById("message").innerHTML;
      var message = str.replace("Enter your email and get 15% off coupon!", "Thank You!");
      document.getElementById("message").innerHTML = "<h1>" + message + "</h1>";

      document.getElementById("message").style.color = "green";

      document.querySelector("a").style.display = "none";
   
      return true;
   }
   else
   {

      var error = document.getElementById("error").innerHTML = "<h4><i>" + "<i class='fas fa-times'></i> " + "You need to put your address email, please" + "</i></h4>";
      document.getElementById("error").style.color = "red";

      return false;
   }

}

///////////////////////////////////////////////////////////////////////////

document.getElementById("link").addEventListener("click", deleteBlocFunction);
document.getElementById("cross").addEventListener("click", deleteBlocFunction);

function deleteBlocFunction(){

	document.getElementById("bloc").style.display = "none";

}

///////////////////////////////////////////////////////////////////////////

setTimeout(function() {

document.getElementById("bloc").style.display = "block";

},3000);

//////////////////////////////////////////////////////////////////////////


















