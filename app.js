let progress = document.getElementById("progress")
let song =document.getElementById("song")
let ctrlIcn = document.getElementById("control-icon")

song.onloadedmetadata =  function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function playPause(){
    if (ctrlIcn.classList.contains("fa-pause")){
        song.pause();
        ctrlIcn.classList.remove("fa-pause")
        ctrlIcn.classList.add("fa-play")
    }
    else{
        song.play();
        ctrlIcn.classList.add("fa-pause");
        ctrlIcn.classList.remove("fa-play");
    }
}

if (song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;

    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value
}