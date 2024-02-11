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
async function incrementViewCount(linkId) {
    try {
        await fetch(`https://almond-understood-makeup.glitch.me/incrementView/${linkId}`, {
            method: "POST"
        });
    } catch (error) {
        console.error(`Error incrementing view count for ${linkId}:`, error);
    }
}

// Attach event listeners to each link to increment view count on click
document.getElementById("link1").addEventListener("click", () => incrementViewCount("link1"));
document.getElementById("link2").addEventListener("click", () => incrementViewCount("link2"));
document.getElementById("link3").addEventListener("click", () => incrementViewCount("link3"));
document.getElementById("link4").addEventListener("click", () => incrementViewCount("link4"));
document.getElementById("link5").addEventListener("click", () => incrementViewCount("link5"));
document.getElementById("link6").addEventListener("click", () => incrementViewCount("link6"));

function renderPopularNews(){
    let a = document.body.innerHTML;
    a += 
}
