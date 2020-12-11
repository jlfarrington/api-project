let baseURL = "https://picsum.photos/900/400"

const banText = document.querySelector('#ban-text');
const txtColor = document.querySelector('#color');
const blurCheck = document.querySelector('#blur');
const grayscaleCheck = document.querySelector('#grayscale');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit');
const clearBtn = document.getElementById('clear')
let url;


form.addEventListener("submit", genBanner);



async function genBanner(e) {
    e.preventDefault();
    if (grayscaleCheck.checked === true && blurCheck.checked === true){
        url = baseURL + '?grayscale' + '&blur=5';
    } else if (grayscaleCheck.checked === true){
        url = baseURL + '?grayscale';
    } else if (blurCheck.checked === true){
        url = baseURL + '?blur=5';
    } else {
        url = baseURL;
    }
    console.log(url);
    await fetch(url)
            .then(json => displayResults(json))
    
    let section = document.querySelector('.ban');
    if(banText.value != ""){
        let heading = document.createElement('h2');
        heading.innerText = banText.value;
        section.appendChild(heading);
    } 


    form.reset();
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
