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
let text1 = document.getElementsByClassName("text1");
let before = document.querySelector("before");
let songItem= Array.from(document.getElementsByClassName("nums"));

let songs =[
   {songName : "Aao Milo Chalo" , filePath : "../Home/Audio/1.mp3" , coverPath: "../Home/Cover/1.png" , filmName:"Jab We Met"},
   {songName : "Agar Tum Saath Ho" , filePath : "../Home/Audio/2.mp3", coverPath: "../Home/Cover/2.png", filmName:"Tamasha" },
   {songName : "Jagadhananda Karaka" , filePath : "../Home/Audio/3.mp3" , coverPath: "../Home/Cover/3.png", filmName:"Sri Rama Rajyam"},
   {songName : "Jarra Jarra" , filePath : "../Home/Audio/4.mp3", coverPath: "../Home/Cover/4.png", filmName:"Gaddalakonda Ganesh"},
   {songName : "Kangal Irandal" , filePath : "../Home/Audio/5.mp3" , coverPath: "../Home/Cover/5.png", filmName:"Subramaniapuram"},
   {songName : "Megham Kaukatha" , filePath : "../Home/Audio/6.mp3", coverPath: "../Home/Cover/6.png", filmName:"Thiruchitrabalam" },
   {songName : "Naan Gaali" , filePath : "../Home/Audio/7.mp3" , coverPath: "../Home/Cover/7.png", filmName:"Good Night"},
   {songName : "Nee Bandu Ninthaaga" , filePath : "../Home/Audio/8.mp3", coverPath: "../Home/Cover/8.png", filmName:"Kasturi Nivasa"},
   {songName : "Seethakalam" , filePath : "../Home/Audio/9.mp3" , coverPath: "../Home/Cover/9.png", filmName:"Son Of Sathyamurthy"},
   {songName : "Tere Vaasthe" , filePath : "../Home/Audio/10.mp3", coverPath: "../Home/Cover/10.png", filmName:"Zara Hatke Zara Bachke"},
   {songName : "Thumbi Vaa" , filePath : "../Home/Audio/11.mp3", coverPath: "../Home/Cover/11.png", filmName:"Olangal"},
]

songItem.forEach((element , i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("name")[0].innerText = songs[i].songName;
   element.getElementsByClassName("film")[0].innerText = songs[i].filmName;
   element.getElementsByClassName("dur")[0].innerText = songs[i].filePath.duration;
})

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

songItem.forEach((element1)=>{
   element1.addEventListener("click" , (element)=>{
      let index = parseInt(element.currentTarget.id);
      if (!audio1.paused) {
         audio1.pause();
         audio1.currentTime = 0;
       }      audio1 = new Audio("../Home/Audio/"+index+".mp3");
      audio1.currentTime =0;
      audio1.play();
      play.classList.remove('bi-play-fill');
      play.classList.add('bi-pause-fill');
      play.querySelector('path').setAttribute('d', 'M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5');
      audio1.addEventListener("timeupdate" , ()=>{
         let progress = parseInt((audio1.currentTime/audio1.duration)*100);
         line.value = progress ;
      })
      songItem.forEach((item) => {
         item.classList.remove('clicked');
         item.getElementsByClassName("name")[0].style.color = '';
       });
       element1.classList.add('clicked');
       element1.getElementsByClassName("name")[0].style.color = 'green';
     });
})

songs.forEach((e) => {
   const songElement = document.getElementById(e.id);
   console.log(songElement);
   songElement.addEventListener("click", () => {
     document.getElementById("songimage").src = e.coverPath;
     document.getElementById("songname").textContent = e.songName;
});
});
