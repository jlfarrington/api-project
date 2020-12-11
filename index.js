let baseURL = "https://picsum.photos/900/400"

const banText = document.querySelector('#ban-text');
const txtColor = document.querySelector('#color');
const blurCheck = document.querySelector('#blur');
const grayscaleCheck = document.querySelector('#grayscale');
const form = document.querySelector('form');


form.addEventListener("submit", genBanner);

// function genBanner(e) {
//         e.preventDefault();
//         if (grayscaleCheck.checked === true && blurCheck.checked === true){
//             baseURL += '?grayscale?blur=5';
//         } else if (grayscaleCheck.checked === true){
//          baseURL += '?grayscale';
//         } else if (blurCheck.checked === true){
//             baseURL += '?blur=10';
//         }
//         fetch(baseURL)
//             .then(json => displayResults(json))
// }

async function genBanner(e) {
    e.preventDefault();
    if (grayscaleCheck.checked === true && blurCheck.checked === true){
        baseURL += '?grayscale?blur=5';
    } else if (grayscaleCheck.checked === true){
     baseURL += '?grayscale';
    } else if (blurCheck.checked === true){
        baseURL += '?blur=10';
    }
    await fetch(baseURL)
            .then(json => displayResults(json))
}


function displayResults(json) {
    let img = json.url;
    let section = document.querySelector('.ban');
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    let banner = document.createElement('img')
    banner.src = img;
    section.appendChild(banner);
}