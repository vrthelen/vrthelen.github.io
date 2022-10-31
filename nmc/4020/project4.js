let firstname = "";
let lastname = "";
let domain = "";
let fact = "";

$( document ).ready(function() {

    $.getJSON('https://raw.githubusercontent.com/emuel/api/master/5110', function(data) {    
        for (let i = 0; i < data.length; i++) {
            firstname = data[i].stu_name;
            lastname = data[i].last_name;
            domain = data[i].domain;
            fact = data[i].fact;
            generate(firstname, lastname, domain, fact);
        }
    });

});


let students = document.querySelector("#students");
function generate(firstname, lastname, domain, fact) {
    students.innerHTML += "<div class='container'> <div class='imgtext'> <img src ='https://" + 
    domain + "/images/me.jpg'"+"<br><h2>" + firstname + " " + lastname + 
    "</h2>" + "<h3>" + fact + "</h3> </div></div>";
}