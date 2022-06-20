
const btn = document.querySelectorAll("button");

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click", handleclick);  
}
var audio_1 = new Audio('sound/tom-1.mp3');
var audio_2 = new Audio('sound/tom-2.mp3');
var audio_3 = new Audio('sound/tom-3.mp3');
var audio_4 = new Audio('sound/snare.mp3');
var audio_5 = new Audio('sound/kick-bass.mp3');
var audio_6 = new Audio('sound/crash.mp3');
var audioList= [audio_1, audio_2, audio_3, audio_4, audio_5, audio_6];

function handleclick(){
    this.style.color="white";
    audioList.map(function(element,index,array){
        console.log(element);
        element.play();
    }) 
}
