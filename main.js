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

async function renderPopularNews(num_art){
    let a = document.body.innerHTML;
    F = []
    await fetchViewCounts(num_art).then(res => F.push(res), err => console.error(err))
    F = F[0]
    
    b = a.substring(0,a.length-1050);

    b += `<br><br><br><br><br><br>\n
    <h2>Nouvelles Populaires</h2>\n
    <div id="body-container-2">\n
        <div class="full-article-container">\n`;  
    for (let i =1;i<=num_art/2;i++){
        b+= `<a href="articles/art-${F[i-1]['article']}.html"  id="link${6+F[i-1]['article']}">\n
        <div class="article-box">\n<img src="photos/art-${F[i-1]['article']}.jpg">\n<br><br><br>\n<p>${document.getElementById(`titre-art-${F[i-1]['article']}`).innerText}</p>\n</div>\n</a>`;
    }
    b+=`</div>\n<div class="full-article-container">`;
    for(let i = num_art/2+1; i <= num_art;i++){
        b+= `<a href="articles/art-${F[i-1]['article']}.html"  id="link${6+F[i-1]['article']}">\n
        <div class="article-box">\n<img src="photos/art-${F[i-1]['article']}.jpg">\n<br><br><br>\n<p>${document.getElementById(`titre-art-${F[i-1]['article']}`).innerText}</p>\n</div>\n</a>`;
    }
    b+=`\n</div>\n</div>\n<br><br><br><br>`;


    document.body.innerHTML = b;
    document.body.innerHTML += ` <div class="carousel-points">\n
    <div id="point-3" onclick="back(3,'-2')"></div>
    <div id="point-4" onclick="test(4,'-2')"></div>
</div>`;
    document.body.innerHTML += ` \n\n\n\n<footer>Ce projet a été réalisé par trois élèves de terminale durant le cours d'enseignement scientifique, dans le but d'informer le public et de mettre en avant les progrès récents faits par les Intelligences Artificielles. Pour nous contacter et nous donner votre avis sur le site, veuillez vous adresser à l'adresse mail suivante : energia.feedback@gmail.com<br><br><br>\n\n\n



    I dedicate any and all copyright interest in this software to the public domain. I make this dedication for the benefit of the public at large and to the detriment of my heirs and successors. I intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.
    <br><br><br>\n\n\n
    
    La license précédente s'applique seulement au code source de la page web, toutes les images utilisées sur ce site web ne nous appartiennent pas. Ces images ont été générées par l'intelligence artificielle de Microsoft, BingIA.\n    \n`;

    for(let i = 1; i<=num_art; i++){
        document.getElementById(`link${i}`).addEventListener("click", () => incrementViewCount(`link${i}`));
        document.getElementById(`link${6+i}`).addEventListener("click", () => incrementViewCount(`link${i}`));
    }
}

renderPopularNews(6);
