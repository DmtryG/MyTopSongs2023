function playAllVideos() {
    var videos = document.querySelectorAll('video');
  
    videos.forEach(function(video) {
      video.play();
    });
  }

  window.onload = function() {
    playAllVideos();
  };
  
function configureAudioPlayer(audio, toggleButton) {
    var isAudioPlaying = false;

    function playAudio() {
        if (!isAudioPlaying) {
            audio.play().then(function() {
                toggleButton.textContent = "Stop";
                isAudioPlaying = true;

                autoPlayOtherAudios(audio);
            }).catch(function(error) {
                console.error("Failed to play audio:", error);
            });
        }
    }

    function pauseAudio() {
        if (isAudioPlaying) {
            audio.pause();
            audio.currentTime = 0;
            toggleButton.textContent = "Play";
            isAudioPlaying = false;
        }
    }

    toggleButton.addEventListener("click", function() {
        if (isAudioPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });

    audio.addEventListener("ended", function() {
        pauseAudio();
    });

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                playAudio();
            } else {
                pauseAudio();
            }
        });
    });

    observer.observe(toggleButton);
}
function autoPlayOtherAudios(currentAudio) {

    var allAudios = document.querySelectorAll("audio");


    allAudios.forEach(function(audio) {
        if (audio !== currentAudio) {
            audio.play().catch(function(error) {
                console.error("Failed to play audio:", error);
            });
        }
    });
}



document.addEventListener("DOMContentLoaded", function() {
    var audio1 = new Audio("Audio/FLOWER cut2.mp3");
    var toggleButton1 = document.getElementById("playPause1");
    configureAudioPlayer(audio1, toggleButton1);

    var audio2 = new Audio("Audio/difficult.mp3");
    var toggleButton2 = document.getElementById("playPause2/1");
    configureAudioPlayer(audio2, toggleButton2);

    var audio3 = new Audio("Audio/I can see you.mp3");
    var toggleButton3 = document.getElementById("playPause2/2");
    configureAudioPlayer(audio3, toggleButton3);

    var audio4 = new Audio("Audio/will you cry.mp3");
    var toggleButton4 = document.getElementById("playPause3/1");
    configureAudioPlayer(audio4, toggleButton4);

    var audio5 = new Audio("Audio/say dont go.mp3");
    var toggleButton5 = document.getElementById("playPause3/2");
    configureAudioPlayer(audio5, toggleButton5);

    var audio6 = new Audio("Audio/vampire cut.mp3");
    var toggleButton6 = document.getElementById("playPause4");
    configureAudioPlayer(audio6, toggleButton6);

    var audio7 = new Audio("Audio/one of the girls.mp3");
    var toggleButton7 = document.getElementById("playPause5");
    configureAudioPlayer(audio7, toggleButton7);

    var audio8 = new Audio("Audio/america has a problem.mp3");
    var toggleButton8 = document.getElementById("playPause6");
    configureAudioPlayer(audio8, toggleButton8);

    var audio9 = new Audio("Audio/eta.mp3");
    var toggleButton9 = document.getElementById("playPause7");
    configureAudioPlayer(audio9, toggleButton9);

    var audio10 = new Audio("Audio/feather.mp3");
    var toggleButton10 = document.getElementById("playPause8");
    configureAudioPlayer(audio10, toggleButton10);

    var audio11 = new Audio("Audio/dogtooth.mp3");
    var toggleButton11 = document.getElementById("playPause9");
    configureAudioPlayer(audio11, toggleButton11);

    var audio12 = new Audio("Audio/the show.mp3");
    var toggleButton12 = document.getElementById("playPause10");
    configureAudioPlayer(audio12, toggleButton12);

    var audio13 = new Audio("Audio/god loves you.mp3");
    var toggleButton13 = document.getElementById("playPause11");
    configureAudioPlayer(audio13, toggleButton13);

    var audio14 = new Audio("Audio/psychedelic switch.mp3");
    var toggleButton14 = document.getElementById("playPause12");
    configureAudioPlayer(audio14, toggleButton14);

    var audio15 = new Audio("Audio/all of the girls.mp3");
    var toggleButton15 = document.getElementById("playPause13");
    configureAudioPlayer(audio15, toggleButton15);

    var audio16 = new Audio("Audio/modern jam.mp3");
    var toggleButton16 = document.getElementById("playPause14");
    configureAudioPlayer(audio16, toggleButton16);

    var audio17 = new Audio("Audio/queencard.mp3");
    var toggleButton17 = document.getElementById("playPause15");
    configureAudioPlayer(audio17, toggleButton17);

    var audio18 = new Audio("Audio/only love can save us now.mp3");
    var toggleButton18 = document.getElementById("playPause16");
    configureAudioPlayer(audio18, toggleButton18);

    var audio19 = new Audio("Audio/do you love me yet.mp3");
    var toggleButton19 = document.getElementById("playPause17");
    configureAudioPlayer(audio19, toggleButton19);

    var audio20 = new Audio("Audio/a _ w.mp3");
    var toggleButton20 = document.getElementById("playPause18");
    configureAudioPlayer(audio20, toggleButton20);

    var audio21 = new Audio("Audio/cant catch me now.mp3");
    var toggleButton21 = document.getElementById("playPause19");
    configureAudioPlayer(audio21, toggleButton21);

    var audio22 = new Audio("Audio/lost the breakup.mp3");
    var toggleButton22 = document.getElementById("playPause20");
    configureAudioPlayer(audio22, toggleButton22);

    var audio23 = new Audio("Audio/goddes.mp3");
    var toggleButton23 = document.getElementById("playPause21");
    configureAudioPlayer(audio23, toggleButton23);

    var audio24 = new Audio("Audio/you and me.mp3");
    var toggleButton24 = document.getElementById("playPause22");
    configureAudioPlayer(audio24, toggleButton24);

    var audio26 = new Audio("Audio/poison poison.mp3");
    var toggleButton26 = document.getElementById("playPause23");
    configureAudioPlayer(audio26, toggleButton26);
});


window.location.href = '#bottom';

window.scrollTo(0, document.body.scrollHeight);
