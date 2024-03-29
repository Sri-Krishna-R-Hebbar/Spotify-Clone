function show_hide() {
    var click = document.getElementById("recent_content");
    if (click.style.display === "none") {
       click.style.display = "block";
    } else {
       click.style.display = "none";
    }
}

let songIndex = 0 ;
let audio1 = new Audio("../Home/Audio/Aao Milo Chalo.mp3");
let play = document.getElementById("play");
let line = document.getElementById("line");
let pause = document.getElementById("pause");

let songs =[
   {songName : "Aao Milo Chalo" , filePath : "../Home/Audio/Aao Milo Chalo.mp3"},
   {songName : "Agar Tum Saath Ho" , filePath : "../Home/Audio/Agar Tum Saath Ho.mp3"},
   {songName : "Kangal Irandal" , filePath : "../Home/Audio/Kangal-Irandal.mp3"},
   {songName : "Thumbi vaa" , filePath : "../Home/Audio/Thumbi Vaa.mp3"}
]

play.addEventListener("click" , ()=>{
   if(audio1.paused || audio1.currentTime<=0)
   {
      audio1.play();
      play.classList.remove('bi-play-fill');
      play.classList.add('bi-pause-fill');
      play.querySelector('path').setAttribute('d', 'M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5');
   }
   else
   {
      audio1.pause();
      play.classList.remove('bi-pause-fill');
      play.classList.add('bi-play-fill');
      play.querySelector('path').setAttribute('d', 'm11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z');
   }
})


audio1.addEventListener("timeupdate" , ()=>{
   let progress = parseInt((audio1.currentTime/audio1.duration)*100);
   line.value = progress ;
})

line.addEventListener("change" , ()=>{
   audio1.currentTime = line.value * audio1.duration/100;
})