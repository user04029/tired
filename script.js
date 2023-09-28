document.getElementById("continuebutton").addEventListener("click", function() {
    document.getElementById("continuebutton").style.display = "none";
    document.getElementById("restofsite").style.display = "block";
    const site = document.getElementById("site");

    const files = [
        "./songs/1.mp3",
    ];
    const index = Math.floor(Math.random() * files.length);
    const audioplayer = document.getElementById("musicplayer");
    audioplayer.src = files[index];
    audioplayer.play();
    audioplayer.loop = true;
});
