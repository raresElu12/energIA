function time(){
    date = new Date();
    document.getElementById("datetime").innerHTML = date.toLocaleTimeString("fr-fr");

} setInterval(time,1000);

function test(id,idb=''){
    document.getElementById(`body-container${idb}`).className='class';
    document.getElementById(`point-${id}`).style.backgroundColor = '#993548';
    document.getElementById(`point-${id-1}`).style.backgroundColor="gray";
}
function back(id,idb=''){
    document.getElementById(`body-container${idb}`).className='back';
    document.getElementById(`point-${id}`).style.backgroundColor='#993548';
    document.getElementById(`point-${id+1}`).style.backgroundColor="gray";
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


async function fetchViewCounts(num_art){
    let list = [];
    for(let i = 1;i<num_art+1;i++){

    try { 
        let response = await fetch(`https://almond-understood-makeup.glitch.me/getViewCount/link${i}`);
        await response.json().then(res => list.push({'article' : i, 'viewCount' : res['count']}), err => console.error(err));
    } catch (error){
        console.error(error);
    }
}
    list.sort((a,b) => b['viewCount'] - a['viewCount']);
    return list;
}

function renderPopularNews(num_art){
    let a = document.body.innerHTML;
    F = []
    listeArticles = fetchViewCounts(num_art).then(res => res, err => console.error(err)).then(res => F.push(res), err => console.error(err));
    F = F[0]
    
    b = a.substring(0,a.length-1121);
    b += `<br><br><br><br><br><br>\n
    <h2>Nouvelles Populaires</h2>\n
    <div id="body-container-2">\n
        <div class="full-article-container">\n`;  
    for (let i =1;i<num_art/2;i++){
        b+= `<a href="articles/art-${F[i-1]['article']}" target="_blank" id="link${6+F[i-1]['article']}">\n
        <div class="article-box">\n<img src="photos/art-${F[i-1]['article']}.jpg">\n<br><br><br>\n<p>${document.getElementById(`titre-art-${F[i-1]['article']}`)}</p>\n</div>\n</a>`;
    }
    b+=`\n<div class="full-article-container">`;
    for(let i = num_art/2; i < num_art;i++){
        b+= `<a href="articles/art-${F[i-1]['article']}" target="_blank" id="link${6+F[i-1]['article']}">\n
        <div class="article-box">\n<img src="photos/art-${F[i-1]['article']}.jpg">\n<br><br><br>\n<p>${document.getElementById(`titre-art-${F[i-1]['article']}`)}</p>\n</div>\n</a>`;
    }
    b+=`\n</div>\n</div>\n<br><br><br><br>`;

    b+=` <div class="carousel-points">\n
    <div id="point-3" onclick="back(3,'-2')"></div>
    <div id="point-4" onclick="test(4,'-2')"></div>
</div>`;

    document.body.innerHTML = b + ` \n    <footer>\n        Ce projet a été réalisé par trois éléves de terminale pendant le cours d'enseignement scientifique, dans le but d'informer le public et mettre en avant les progrès faits par les Intelligences Artificielles ces derniers temps. Pour nous contacter et nous donner votre avis sur le site nous disposons d'une adresse, qui s'adresse à ces deux cas en particulier, l'adresse est : energia.feedback@gmail.com\n\n        <br><br><br><br>\n        I dedicate any and all copyright interest in this software to the\n        public domain. I make this dedication for the benefit of the public at\n        large and to the detriment of my heirs and successors. I intend this\n        dedication to be an overt act of relinquishment in perpetuity of all\n        present and future rights to this software under copyright law.<br><br><br>\n\n        La license précédente s'applique seulement au code source de la page web, toutes les photos utilisées sur ce site web ne m'appartiennent pas. Ces photos ont été créées par l'intelligence artificielle de Bing appelée BingIA.\n    </footer>\n    <br><br><br><br><br><br><br>\n    \n`;
}

renderPopularNews(6);

document.getElementById("link1").addEventListener("click", () => incrementViewCount("link1"));
document.getElementById("link2").addEventListener("click", () => incrementViewCount("link2"));
document.getElementById("link3").addEventListener("click", () => incrementViewCount("link3"));
document.getElementById("link4").addEventListener("click", () => incrementViewCount("link4"));
document.getElementById("link5").addEventListener("click", () => incrementViewCount("link5"));
document.getElementById("link6").addEventListener("click", () => incrementViewCount("link6"));
document.getElementById("link7").addEventListener("click", () => incrementViewCount("link1"));
document.getElementById("link8").addEventListener("click", () => incrementViewCount("link2"));
document.getElementById("link9").addEventListener("click", () => incrementViewCount("link3"));
document.getElementById("link10").addEventListener("click", () => incrementViewCount("link4"));
document.getElementById("link11").addEventListener("click", () => incrementViewCount("link5"));
document.getElementById("link12").addEventListener("click", () => incrementViewCount("link6"));
