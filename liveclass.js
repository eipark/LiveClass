$(document).ready(function(){
  var video = document.getElementById('video');

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
  window.URL = window.URL || window.webkitURL;
  alert(navigator.getUserMedia);
  if (navigator.getUserMedia) {
    navigator.getUserMedia("video",
      function(stream) {
        video.src = URL.createObjectURL(stream);
      },
      function (err) {
        console.log("Something went wrong");

      }
    );
  } else { alert("nope");}
});
