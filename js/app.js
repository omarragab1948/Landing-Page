let ulNav = document.getElementById("navbar__list");
/* creat li to put text in */
let navSec1 = document.createElement("li");
let navSec2 = document.createElement("li");
let navSec3 = document.createElement("li");
/* creat end*/
/*creat nav links*/
let navLink1 = document.createElement("a");
let navLink2 = document.createElement("a");
let navLink3 = document.createElement("a");
/*end*/
/*creat text to put it in a */
let navText1 = document.createTextNode("Section 1");
let navText2 = document.createTextNode("Section 2");
let navText3 = document.createTextNode("Section 3");
/* creat end*/
/*put text in a*/
navLink1.appendChild(navText1);
navLink2.appendChild(navText2);
navLink3.appendChild(navText3);
/*end*/
/*put text in a */
navSec1.appendChild(navLink1);
navSec2.appendChild(navLink2);
navSec3.appendChild(navLink3);
/*end*/
/*put li in nav ul*/
ulNav.appendChild(navSec1);
ulNav.appendChild(navSec2);
ulNav.appendChild(navSec3);
/*link a in nav with sections*/
navLink1.href = "#section1";
navLink2.href = "#section2";
navLink3.href = "#section3";
/*end*/

window.onscroll = function (){
    if (window.scrollY <= 620 && window.scrollY >= 615){
       for(i = 1; i < 4; i++){
        document.getElementById(`section${i}`).classList.remove("your-active-class")
       }
       document.getElementById("section1").classList.toggle("your-active-class");
    }  else if ((window.scrollY <= 1320 && window.scrollY >= 1250)){
        for(i = 1; i < 4; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section2").classList.toggle("your-active-class");
    }else if ((window.scrollY <= 1900 && window.scrollY >= 1890)){
        for(i = 1; i < 4; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section3").classList.toggle("your-active-class");
    }
}


