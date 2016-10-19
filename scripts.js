console.log("Scripts Loaded");

document.addEventListener("DOMContentLoaded", function(){
  console.log("Dom Loaded");

  randomBackgroundColor();

  setInterval(function(){
    // randomBackgroundColor();
  }, 1000)

  function randomBackgroundColor(){
      document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
  }

});
