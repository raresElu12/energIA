function time(){
    date = new Date();
    document.getElementById("datetime").innerHTML = date.toLocaleTimeString("fr-fr");

} setInterval(time,1000);

function test(){
    document.getElementById("body-container").className='class';
    document.getElementById("point-2").style.backgroundColor = '#993548';
    document.getElementById("point-1").style.backgroundColor="gray";
}
function back(){
    document.getElementById("body-container").className='back';
    document.getElementById("point-1").style.backgroundColor='#993548';
    document.getElementById("point-2").style.backgroundColor="gray";
}
