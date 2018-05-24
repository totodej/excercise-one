'use strict';

window.onload = function(){

    document.getElementById("form").addEventListener("submit", validation);
    document.getElementById("cancel").addEventListener("click", refresh);

    var subject = document.getElementById("subject");
    var contactReasons = document.getElementById("contactReasons")
    var message = document.getElementById("message");
    var personName = document.getElementById("name");
    var email = document.getElementById("email");

    var missFieldSubject = document.getElementById("missFieldSubject");
    var missFieldMessage = document.getElementById("missFieldMessage");
    var missFieldName = document.getElementById("missFieldName");
    var missFieldMail = document.getElementById("missFieldMail");

    var successMessage = document.getElementById("success");
    var explication = document.getElementById("describe");
    var blocForm = document.getElementById("blocForm");
    var bloc = document.getElementById("bloc");

    var contactForm = {
                subject : "", 
                contactReasons : "", 
                message : "", 
                personName : "", 
                email : ""
                };

    function validation(event) {

        event.preventDefault();

        contactForm.subject = subject.value;
        contactForm.contactReasons = contactReasons.value;
        contactForm.message = message.value;
        contactForm.personName = personName.value;
        contactForm.email = email.value;

        var errorMessage = "";

        // Start validation

        missFieldSubject.style.display ="none";

        if(subject.value === ""){
            missFieldSubject.style.display = "block";
            missFieldSubject.innerHTML = 'Fill the field "Subject" please';
            missFieldSubject.style.color = "red";
            missFieldSubject.style.fontSize = "15px";
        }

        missFieldMessage.style.display = "none";

        if(message.value === ""){
            missFieldMessage.style.display = "block";
            missFieldMessage.innerHTML = 'Fill the field "Message" please';
            missFieldMessage.style.color = "red";
            missFieldMessage.style.fontSize = "15px";
        } 
        
        missFieldName.style.display = "none";

        if (personName.value === ""){
            missFieldName.style.display = "block";
            missFieldName.innerHTML = 'Fill the field "Name" please';
            missFieldName.style.color = "red";
            missFieldName.style.fontSize = "15px";
        }
        
        missFieldMail.style.display = "none";

        if (email.value === ""){
            missFieldMail.style.display = "block";
            missFieldMail.innerHTML = 'Fill the field "Email" please';
            missFieldMail.style.color = "red";
            missFieldMail.style.fontSize = "15px";
        }

        if(subject.value === "" || message.value === "" || personName.value === "" || email.value === ""){

             return false;
        }

        localStorage.setItem("Contact-Form", JSON.stringify(contactForm));
        /*
        localStorage.setItem("subject", subject.value);
        localStorage.setItem("contactReasons", contactReasons.value);
        localStorage.setItem("message", message.value);
        localStorage.setItem("name", personName.value);
        localStorage.setItem("email", email.value);
        */
        
        explication.style.display = "none";
        blocForm.style.display = "none";
        bloc.style.backgroundColor = "#feca57";
        successMessage.style.display = "block";
        successMessage.style.color = "green";
        successMessage.style.margin = "auto";
        successMessage.style.fontSize = "70px";
        successMessage.style.textAlign = "center";

        return true;
    }

    function refresh() {

        window.location.reload(false);

        localStorage.removeItem("Contact-Form");

    }

    function loadData(){

        var loadData = localStorage.getItem("Contact-Form");
        var jsonParse = JSON.parse(loadData);

        subject.value = jsonParse.subject;
        contactReasons.value = jsonParse.contactReasons;
        message.value = jsonParse.message;
        personName.value = jsonParse.personName;
        email.value = jsonParse.email;
    }

    loadData();  

}



