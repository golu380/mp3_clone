console.log("Welcome to Spotify ")
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('massterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName: "Warriyo - Mortals [NCS Realease]",filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
]