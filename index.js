let baseURL = "https://picsum.photos/1200/400"

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

    let header = document.querySelector('.ban-heading');
    while (header.firstChild){
        header.removeChild(header.firstChild)
    }

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
    
    if(banText.value != ""){
        let header = document.querySelector('.ban-heading');
        let headingText = document.createElement('h2');
        // headingText.classList.add('h2Banner')
        headingText.innerText = banText.value;
        header.appendChild(headingText);
        if(txtColor.value){
            header.style.color = txtColor.value;
        } else if(!txtColor.value){
            header.style.color = "white";
        }
    }

    form.reset();
}


function displayResults(json) {
    let img = json.url;
    let section = document.querySelector('.banner');
    section.style.backgroundImage = `url(${img})`
}
