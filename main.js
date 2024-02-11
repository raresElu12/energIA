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





async function fetchViewCounts(num_art){
    let list = []
    for(let i = 1;i<num_art+1;i++){

    try { 
        let response = await fetch(`https://almond-understood-makeup.glitch.me/getViewCount/link${i}`);
        await response.json().then(res => list.push({'article' : i, 'viewCount' : res['count']}), err => console.error(err));
    } catch (error){
        console.error(error);
    }
}
    return list.sort((a,b) => b['viewCount'] - a['viewCount'])
}

function renderPopularNews(num_art){
    let a = document.body.innerHTML;
    listeArticles = fetchViewCounts(num_art);
    b = a.substring(0,a.length-1121);
    b += `<br><br><br><br><br><br>\n
    <h2>Nouvelles Populaires</h2>\n
    <div id="body-container-2">\n
        <div class="full-article-container">\n`;  
    for (let i =1;i<num_art/2;i++){
        b+= `<a href="articles/art-${listeArticles[i-1]}" target="_blank" id="link${6+listeArticles[i-1]}">\n
        <div class="article-box">\n<img src="photos/art-${listeArticles[i-1]}.jpg">\n<br><br><br>\n<p>${document.getElementById(`titre-art-${listeArticles[i-1]}`)}</p>\n</div>\n</a>`;
    }
    b+=`\n<div class="full-article-container">`;
    for(let i = num_art/2; i < num_art;i++){
        b+= `<a href="articles/art-${listeArticles[i-1]}" target="_blank" id="link${6+listeArticles[i-1]}">\n
        <div class="article-box">\n<img src="photos/art-${listeArticles[i-1]}.jpg">\n<br><br><br>\n<p>${document.getElementById(`titre-art-${listeArticles[i-1]}`)}</p>\n</div>\n</a>`;
    }
    b+=`\n</div>\n</div>\n<br><br><br><br>`;
}

renderPopularNews(6);
