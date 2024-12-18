document.querySelector("ul a").style.color = "red";
document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("body > h1").classList.add("huge")
// document.querySelector("h1").classList.toggle("huge")
document.querySelector("h1").classList.toggle("huge")
// toggle means if it is there then remove it and if it is not there then add it    
document.querySelector("h1").innerHTML = "<em>Good Bye</em>"
// document.querySelector("h1").textContent = "Good Bye"
// the difference between innerHTML and textContent is that innerHTML you can add html code to it, but textcontent will only manipulate the text
