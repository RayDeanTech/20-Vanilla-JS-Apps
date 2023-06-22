const video = document.getElementById('video');
const btnPlay = document.getElementById('play');
const btnStop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');

// Play & Pause Video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    };
};

// update play/pause button
function updatePlayIcon() {
    if (video.paused) {
        btnPlay.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        btnPlay.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    };
};

// update progress & timestamp
function updateProgress() {
    // console.log(video.currentTime); // shows the seconds that are being played
    // console.log(video.duration); // shows duration
    progress.value = (video.currentTime / video.duration) * 100; //gives percentage

    // get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    };

    // get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    };

    timestamp.innerHTML = `${mins}:${secs}`;


    // return true;
};

// terminate playback
function stopVideo() {
    video.currentTime = 0;
    video.pause();
};

// match slider bar to progress
// (puts bar in appropriate place on slider)
function setVideoProgress() {
    video.currentTime = (parseInt(progress.value) * video.duration) / 100;
};


// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

btnPlay.addEventListener('click', toggleVideoStatus);
btnStop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);