// player.js
window.onload = function() {
    var audioPlayer = document.querySelector('#audioPlayer');
    var songs = document.querySelectorAll('.song');
    var currentSongIndex = 0;

    function playSong(index) {
        var song = songs[index];
        var src = song.getAttribute('data-src');
        audioPlayer.src = src;
        audioPlayer.play();
    }

    songs.forEach(function(song, index) {
        song.addEventListener('click', function() {
            currentSongIndex = index;
            playSong(currentSongIndex);
        });
    });

    audioPlayer.onended = function() {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; // Loop back to the first song
        }
        playSong(currentSongIndex);
    };

    // Start with the first song
    playSong(currentSongIndex);
};
