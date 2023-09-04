document.getElementById("continuebutton").addEventListener("click", function() {
    document.getElementById("continuebutton").style.display = "none";
    document.getElementById("restofsite").style.display = "block";
    const site = document.getElementById("site");
    site.style.backgroundImage = "url('https://getwallpapers.com/wallpaper/full/6/8/5/170847.jpg')";
    const files = [
        "./songs/1.mp3",
        "./songs/2.mp3",
        "./songs/3.mp3",
        "./songs/4.mp3",
        "./songs/5.mp3",
        "./songs/6.mp3",
    ];
    const index = Math.floor(Math.random() * files.length);
    const audioplayer = document.getElementById("musicplayer");
    audioplayer.src = files[index];
    audioplayer.play();
    audioplayer.loop = true;
});