// main.js

// TODO
var honk = document.getElementById("honk-btn");
var numInput = document.getElementById("volume-number");
var slideInput = document.getElementById("volume-slider");
var volIcon = document.getElementById("volume-image");
var audio = document.getElementById("horn-sound");
var soundImage = document.getElementById("sound-image");
var air = document.getElementById("radio-air-horn");
var car = document.getElementById("radio-car-horn");
var party = document.getElementById("radio-party-horn");

//change the input text should also change the slide input
numInput.addEventListener('input', updateSlideInput); 
slideInput.addEventListener('input', updateTextInput); 
honk.addEventListener('click', playAudio);
air.addEventListener('input', updateAudioType);
car.addEventListener('input', updateAudioType);
party.addEventListener('input', updateAudioType);

function updateSlideInput(e){
    slideInput.value = e.target.value; 
    updateVolIcon(numInput.value);
    audio.volume = numInput.value / 100;
}

function updateTextInput(e){
    numInput.value = e.target.value; 
    updateVolIcon(numInput.value);
    audio.volume = numInput.value/ 100;
}

function playAudio(e){
    e.preventDefault();   
    updateAudioType(); 
    audio.play(); 
}

function updateVolIcon(value){
    if(value >= 67)
    {
        volIcon.src = "./assets/media/icons/volume-level-3.svg";
        honk.disabled = false;
    }
    else if(value >= 34)
    {
        volIcon.src = "./assets/media/icons/volume-level-2.svg";
        honk.disabled = false;
    }
    else if(value >= 1)
    {
        volIcon.src = "./assets/media/icons/volume-level-1.svg";
        honk.disabled = false;
    }
    else
    {
        volIcon.src = "./assets/media/icons/volume-level-0.svg";
        honk.disabled = true;
    }
}

function updateAudioVol(value){
    audio.volume = value.toFixed(2) / 100;
    alert(audio.volume);
}

function updateAudioType(){
    if(air.checked)
    {
        audio.src = "./assets/media/audio/air-horn.mp3";
        soundImage.src = "./assets/media/images/air-horn.svg";
    }
    else if (car.checked)
    {
        audio.src = "./assets/media/audio/car-horn.mp3";
        soundImage.src = "./assets/media/images/car.svg";
    }
    else
    {
        audio.src = "./assets/media/audio/party-horn.mp3";
        soundImage.src = "./assets/media/images/party-horn.svg";
    }
}