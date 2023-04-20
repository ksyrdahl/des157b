(function(){
    'use strict';

    const fs = document.querySelector('.fa-expand');
    const pause = document.querySelector('.fa-pause');
    const play = document.querySelector('.fa-play');
    const restart = document.querySelector('.fa-arrow-rotate-right');
    const vid = document.querySelector('#myVideo');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    const img1 = document.querySelector('#img1');

    const intervalID = setInterval(checkTime, 1000);

    const loading = document.querySelector('.fa-book-open-cover');

    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    })
   
    function checkTime(){
        console.log(parseInt(myVideo.currentTime));


        
        if (2 < myVideo.currentTime && myVideo.currentTime < 4) {
            line1.className = "showing";
        } else {
            line1.className = "hidden";
        }
        if (3 < myVideo.currentTime && myVideo.currentTime < 4) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }
        if (5 < myVideo.currentTime && myVideo.currentTime < 9) {
            img1.className = "showing";
            img1.style.opacity = "20%";
            img1.style.animation = "imgGrow 3s";
        } else {
            img1.className = "hidden";
            img1.style.opacity = "0%";
        }
        if (5 < myVideo.currentTime && myVideo.currentTime < 7) {
            line3.className = "showing";
            line3.style.animation = "lineGrow 3s";
        } else {
            line3.className = "hidden";
        }
        if (7 < myVideo.currentTime && myVideo.currentTime < 9) {
            line4.className = "showing";
        } else {
            line4.className = "hidden";
        }
        if (13 < myVideo.currentTime && myVideo.currentTime < 17) {
            line5.className = "showing";
            line5.style.animation = "lineLeft 4s";
        }
        else if (17 < myVideo.currentTime && myVideo.currentTime < 18) {
            vid.pause();
            restart.style.opacity = "100%";
            vid.style.opacity = "50%";
            restart.addEventListener('click', function(){
                location.reload();
                restart.style.opacity = "0";
            })
        }
         else {
            line5.className = "hidden";
            restart.style.opacity = "0";
         }
    }

    fs.addEventListener('click', function(){
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            vid.style.left = "-5%";
        } else {
            document.exitFullscreen();
            vid.style.left = "0%";
        }
    })


    pause.addEventListener('click', function(){
        play.style.display = "block";
        play.style.opacity = "1";
        pause.style.display = "none";
        vid.pause();
    })   

    play.addEventListener('click', function(){
        play.style.display = "none";
        pause.style.display = "block";
        vid.play();
    })

    document.addEventListener('mousemove', reportPos);

            let prevLoc = 0;

            function reportPos(event) {
                const windowSize = window.innerWidth;
                const percent2px = windowSize / 100;
                const xPos = event.clientX;
                const changeColor = Math.floor(xPos / percent2px);

                if (changeColor !== prevLoc) {
                    vid.style.filter = `grayscale(${changeColor}%)`;
                    prevLoc = changeColor;
                    console.log(prevLoc);
                }
            }

})();