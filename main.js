function time(){
    date = new Date();
    document.getElementById("datetime").innerHTML = date.toLocaleTimeString("fr-fr");

} setInterval(time,1000);

function carousel(input){
    if(input === 0){
        a = document.getElementById("body-container");
        a.setAttribute("style","left:-100vw");
        document.getElementById("first-arrow").style.zIndex="-1";
        document.getElementById("first-arrow").style.visibility = "hidden";
        document.getElementById("second-arrow").style.visibility="visible";
        document.getElementById("second-arrow").style.zIndex="1";
    }
    else if(input === 1){
        document.getElementById("body-container").setAttribute("style", "right:-100vw");
        document.getElementById("second-arrow").style.zIndex="-1";
        document.getElementById("second-arrow").style.visibility="hidden";
        document.getElementById("first-arrow").style.visibility="visible";
        document.getElementById("first-arrow").style.zIndex="1";
    }
}