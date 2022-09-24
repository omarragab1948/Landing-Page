let ulNav = document.getElementById("navbar__list");
/* creat li to put text in */
let url="#section"
for(let i = 0; i < (document.querySelectorAll("section").length); i++){
    document.write(`<a href="#section${i+1}">Section ${i+1}</a>`)
}
for(let i = 0; i < document.links.length; i++){
    document.querySelectorAll("a")[i].className = `section${i+1}`
}
for(let i = 0; i < document.links.length; i++){
    ulNav.appendChild(document.querySelectorAll("a")[i])
}
/*var url = 'www.yoururl/cpm'
var a = document.createElement('a')
a.textContent = 'LINK'
a.href = url 
document.body.appendChild(a)
*/
/*document.write(`<a href='"www.google.com"'>LINK</a>`)
/*let text = document.createTextNode("Section");
let link = document.querySelectorAll("a");
for(i=0; i< (document.querySelectorAll("section").length); i++){
    (links[i]).appendChild(text)
}
/*link.appendChild(text)
console.log((document.querySelectorAll("a").length))
/*for(let i = 0; i < (3); i++){


}
/*for(let i = 0; i < (document.querySelectorAll("section").length); i++){
    document.querySelectorAll("a").appendChild((document.createTextNode("Section")))
}

/* creat end*/
/*creat nav links*/
/*for(i = 0; i < (document.querySelectorAll("section").length); i++){
    document.createElement("a");
}
/*end*/
/*creat text to put it in a */
/*for(i = 0; i < (document.querySelectorAll("section").length); i++){
    document.createElement("section");
    console.log(2)
}
/* creat end*/
/*put text in a*/
/*a.appendChild("section");
/*navLink2.appendChild(navText2);
navLink3.appendChild(navText3);
/*end*/
/*put text in a */
/*navSec1.appendChild(navLink1);
navSec2.appendChild(navLink2);
navSec3.appendChild(navLink3);
/*end*/
/*put li in nav ul*/
/*ulNav.appendChild(navSec1);
ulNav.appendChild(navSec2);
ulNav.appendChild(navSec3);
/*link a in nav with sections*/
/*navLink1.href = "#section1";
navLink2.href = "#section2";
navLink3.href = "#section3";
/*end*/

window.onscroll = function (){
    if (window.scrollY <= 620 && window.scrollY >= 615){
       for(i = 1; i < document.links.length; i++){
        document.getElementById(`section${i}`).classList.remove("your-active-class")
       }
       document.getElementById("section1").classList.toggle("your-active-class");
    }  else if ((window.scrollY <= 1320 && window.scrollY >= 1250)){
        for(i = 1; i < document.links.length; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section2").classList.toggle("your-active-class");
    }else if ((window.scrollY <= 1900 && window.scrollY >= 1890)){
        for(i = 1; i < document.links.length; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section3").classList.toggle("your-active-class");
    }else if((window.scrollY <= 2500 && window.scrollY >= 2490)){
        for(i = 1; i < document.links.length; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section4").classList.toggle("your-active-class");
    } else if((window.scrollY <= 3100 && window.scrollY >= 3090)){
        for(i = 1; i < document.links.length; i++){
            document.getElementById(`section${i}`).classList.remove("your-active-class")
           }
           document.getElementById("section5").classList.toggle("your-active-class");
    }
}


