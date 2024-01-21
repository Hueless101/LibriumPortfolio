function vidClicked(file){
    var videoModal = document.getElementById('video-modal');
      videoModal.src = file;

      // Show the video overlay
      var videoOverlay = document.getElementById('video-overlay');
      videoOverlay.style.display = 'flex';
}

function vidClose(){
    var videoOverlay = document.getElementById('video-overlay');
      videoOverlay.style.display = 'none';

      // Pause the video when the overlay is closed
      var videoModal = document.getElementById('video-modal');
      videoModal.pause();
}