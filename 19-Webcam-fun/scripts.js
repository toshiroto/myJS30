const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then(localMediaStream => {
    console.log(localMediaStream);
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  })
  .catch(err => {
    console.error(`Oh Noo!!`, err);
  })
  }
  function paintToCanvas(){
    const width = video.videoWidth;
    const heigth = video.videoHeight;
    console.log(width, heigth);
    canvas.width = width;
    canvas.heigth = heigth;
  }
getVideo();
