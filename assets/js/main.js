const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

//SFONDO
const img = document.createElement("img");
img.id = "big_video";
img.src = "assets/img/luffy.gif";
img.alt = "luffy gif"
container.appendChild(img);

//HEADER
const header = document.createElement("section");
header.className = "header";
container.appendChild(header);

//HEADER TITLE
const titleBox = document.createElement("section");
titleBox.className = "title_box";
header.appendChild(titleBox);

const title = document.createElement("h1");
title.id = "title";
title.textContent = "Luffy's Counter";
titleBox.appendChild(title);

//SOCIAL LOGO
const socialBox = document.createElement("section");
socialBox.className = "social_box";
header.appendChild(socialBox);

const social = document.createElement("div");
social.id = "social"
socialBox.appendChild(social);

const socialLogo = document.createElement("a");
socialLogo.href = "https://github.com/Bons27";
social.appendChild(socialLogo);

const linkImg = document.createElement("img");
linkImg.src = "assets/img/github.svg";
linkImg.alt = "github icon";
socialLogo.appendChild(linkImg);

//COUNTER
const counterBox = document.createElement("section");
counterBox.className = "counter_box"
container.appendChild(counterBox);

//COUNTER DISPLAY
const displaBox = document.createElement("section");
displaBox.className = "display_box";
counterBox.appendChild(displaBox);

const display0 = document.createElement("div");
display0.id = "display";
displaBox.appendChild(display0);

const displayP = document.createElement("p");
displayP.textContent = "0";
display0.appendChild(displayP);

let contatore = 0;
let display = document.getElementById("display")

function mostraAlert(percorsoImmagine) {
    const modale = document.createElement("div");
    modale.className = "alert-modal";
    
    if (percorsoImmagine) {
        const immagineModale = document.createElement("img");
        immagineModale.src = percorsoImmagine;
        immagineModale.alt = "Immagine del modale";
        modale.appendChild(immagineModale);
    }
    
    const chiudiButton = creaBottone("Chiudi", function() {
        document.body.removeChild(modale);
    });
    modale.appendChild(chiudiButton);

    document.body.appendChild(modale);
}

function incrementaContatore(){
    contatore++;
    updateDisplay();
    if(contatore === 25) {
        mostraAlert("assets/img/luffygear2.png");
        riproduciAudio("assets/audio/gear2.mp3");
    }
    if(contatore === 50) {
        mostraAlert("assets/img/gearfourth.png");
        riproduciAudio("assets/audio/gear4.mp3");
    }
    if(contatore === 75) {
        mostraAlert("assets/img/luffygear5.png");
        riproduciAudio("assets/audio/luffygear5.mp3");
    }
    if(contatore === 100) {
        mostraAlert("assets/img/fatluffy.png");
    }
};

function decrementaContatore(){
    if (contatore > 0){
    contatore--;
    updateDisplay();
    }
};

function resettaContatore(){
    contatore = 0;
    updateDisplay();
    audioReset.play();
}

function updateDisplay(){
    display.innerHTML = contatore;
}

//FUNZIONE PER CREARE BOTTONE
function creaBottone(testo, gestoreEvento) {
    let bottone = document.createElement("button");
    bottone.innerHTML = testo;

    if(gestoreEvento){
        bottone.addEventListener("click", gestoreEvento);
    }
    return bottone;
}

//BOTTONI
const buttonBox = document.createElement("section");
buttonBox.className = "button_box";
container.appendChild(buttonBox);

const negativeButton = document.createElement("div");
negativeButton.id = "negative_button";
buttonBox.appendChild(negativeButton);

const resetButton = document.createElement("div");
resetButton.id = "reset_button";
buttonBox.appendChild(resetButton);

const positiveButton = document.createElement("div");
positiveButton.id = "positive_button";
buttonBox.appendChild(positiveButton);

let bottone1 = creaBottone("-", decrementaContatore);
negativeButton.appendChild(bottone1);

let bottone2 = creaBottone("Reset", resettaContatore);
resetButton.appendChild(bottone2);

let bottone3 = creaBottone("+", incrementaContatore);
positiveButton.appendChild(bottone3);

//BOTTONE START
const startBox = document.createElement("section");
startBox.className = "start_box";
container.appendChild(startBox);

const startButton = document.createElement("div")
startButton.id = "start_button";
startBox.appendChild(startButton);

let bottone4 = creaBottone("Avvia");
startButton.appendChild(bottone4);
bottone4.addEventListener("click", function(){
    if(audioSfondo.paused) {
        document.getElementById("big_video").src = 'assets/img/luffy.gif';
        audioSfondo.play();
        bottone4.textContent = "Interrompi";
    } else {
        document.getElementById("big_video").src = '/assets/img/luffy.jpg';
        audioSfondo.pause();
        audioSfondo.currentTime = 0;
        bottone4.textContent = "Avvia"
    }
});

//AUDIO
const suono = [
    'assets/audio/BinkSake.mp3',
    'assets/audio/monkeyDluffy.mp3',
    'assets/audio/gear2.mp3',
    'assets/audio/gear4.mp3',
    'assets/audio/luffygear5.mp3'
];

const audioBinksake = new Audio();

function riproduciBinkSake() {
    audioBinksake.src = suono[0];
};

let audioSfondo = new Audio ('assets/audio/BinkSake.mp3')
audioSfondo.addEventListener("ended", function() {
    audioSfondo.currentTime = 0;
    audioSfondo.play();
});

const audioReset = new Audio('assets/audio/monkeyDluffy.mp3');

function riproduciAudio(source) {
    let audio = new Audio(source);
    audio.play();
}

// riproduciAudio("/assets/audio/gear2.mp3");
// riproduciAudio("/assets/audio/gear4.mp3");
// riproduciAudio("/assets/audio/luffygear5.mp3");
