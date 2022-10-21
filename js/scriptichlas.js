$(document).ready(function(){
    $(".menu").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_menu = split[1];

        $(".menu").removeClass('aktif');
        $("#menu_"+id_menu).addClass('aktif');

        $(".home").slideUp();

        $("#isi_1").slideUp();
        $("#isi_2").slideUp();
        $("#isi_3").slideUp();
        $("#isi_4").slideUp();
        $("#isi_"+id_menu).slideToggle();

      });
});
    
$(document).ready(function(){
    $(".tugas").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_tugas = split[1];
        
    $("tugas").removeClass('awal');
        $("#tugas_"+id_tugas).addClass('awal');

        $(".homet").slideUp();

        $("#isit_1").slideUp();
        $("#isit_2").slideUp();
        $("#isit_3").slideUp();
        $("#isit_4").slideUp();
        $("#isit_"+id_tugas).slideToggle();
      });
});

const btnPlay = document.querySelector("#btn-play");
const btnPlayIcon = document.querySelector("#btn-play-icon");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const musicName = document.querySelector("#music-name");
const musicAuthor = document.querySelector("#music-author");
const playerCurrentTime = document.querySelector("#player-current-time");
const playerDuration = document.querySelector("#player-duration");
const playerProgress = document.querySelector("#player-progress");
const audioPlayer = document.querySelector("#audio-player");

let currentMusic = 0;

const musics = [
  {
    name: "Generator",
    author: "Bad Religion",
    path: "musik/Generator.mp3",
  },
  {
    name: "All I Want",
    author: "The Offspring",
    path: "musik/All I Want.mp3",
  },
  {
    name: "International You Day",
    author: "No Use For A Name",
    path: "musik/International You Day.mp3",
  },
  {
    name: "Basket Case",
    author: "Green Day",
    path: "musik/Basket Case.mp3",
  },
  {
    name: "I Miss You",
    author: "Blink 182",
    path: "musik/I Miss You.mp3",
  },
];

btnPlay.addEventListener("click", () => togglePlayMusic());
btnPrev.addEventListener("click", () => changeMusic(false));
btnNext.addEventListener("click", () => changeMusic());
audioPlayer.addEventListener("timeupdate", () => timeUpdate());

const togglePlayMusic = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    btnPlayIcon.classList.replace("bi-play-fill", "bi-pause-fill");
  } else {
    audioPlayer.pause();
    btnPlayIcon.classList.replace("bi-pause-fill", "bi-play-fill");
  }
};

const changeMusic = (next = true) => {
  if (next && currentMusic < musics.length - 1) {
    currentMusic++;
  } else if (!next && currentMusic > 0) {
    currentMusic--;
  } else {
    return;
  }

  updatePlayer();
  togglePlayMusic();
};

const updatePlayer = () => {
  const music = musics[currentMusic];

  musicName.innerHTML = music.name;
  musicAuthor.innerHTML = music.author;
  audioPlayer.src = music.path;
};

const timeUpdate = () => {
  const { currentTime, duration } = audioPlayer;

  if (isNaN(duration)) return;

  playerDuration.innerHTML = formatSecondsToMinutes(duration);
  playerCurrentTime.innerHTML = formatSecondsToMinutes(currentTime);
  playerProgress.max = duration;
  playerProgress.value = currentTime;
};

const formatSecondsToMinutes = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(14, 19);
};

window.onload = () => {
  updatePlayer();
};