var myToggle = document.getElementById("home");
var myList = document.getElementById("nav-list")

function screenResize(){
    screenSize = document.body.clientWidth;
    if(screenSize <= 576){
        myToggle.style.display = "block";
        myToggle.innerHTML = "MENU";
        myList.style.display = "none";
    } else{
        myToggle.style.display = "none";
        myList.style.display = "flex";
    }
}

function showNav(){
    if(myList.style.display == "none"){
        myToggle.innerHTML = "CLOSE";
        myList.style.display = "block";
    } else{
        myToggle.innerHTML = "MENU";
        myList.style.display = "none";
    }
}