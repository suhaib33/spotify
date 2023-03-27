let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let gif = document.getElementById('gif');
let songitems =Array.from( document.getElementsByClassName('songitem'));

let songs=[
    {songname: "bella ciao", filepath : "songs/1.mp3", coverpath: "covers/1.png"},
    {songname: "sanam teri kasam", filepath : "songs/2.mp3", coverpath: "covers/2.JPG"},
    {songname: "Tum hi aana", filepath : "songs/3.mp3", coverpath: "covers/3.png"},
    {songname: "aa Raat bhar", filepath : "songs/4.mp3", coverpath: "covers/4.png"}
]
songitems.forEach((element)=>{ 
   
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;

})


 masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
 })

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})


 const makeallplays =()=>{
    Array.from(document.getElementsByClassName('suby')).forEach((element)=>{
        element.classList.add('fa-circle-pause');

    })
 } 
 
Array.from (getElementsByClassName('fa-sharp')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeallplays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = 'songs/3.mp3';
    audioElement.currentTime;
    audioElement.play();

})
})