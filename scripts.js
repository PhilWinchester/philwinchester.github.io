'use strict';

(() => {
  console.log('');

  // // init controller
  // let controller = new ScrollMagic.Controller();
  //
  // // create a scene
  // new ScrollMagic.Scene({
  //         duration: 100,    // the scene should last for a scroll distance of 100px
  //         offset: 50        // start this scene after scrolling for 50px
  //     })
  //     .setPin(".about") // pins the element for the the scene's duration
  //     .addTo(controller);   // assign the scene to the controller

  let pySpan = $("#python-txt")
  let jsSpan = $("#js-txt")

  jsSpan.typed({
    strings: [`
      const developer = ( ) => { <br>

      }
    `],
    typeSpeed: 10,
  });
  pySpan.typed({
    strings: [`
      class Developer: <br>
        def __init__ (self): <br>
          self.hobbyist = True

    `],
    typeSpeed: 10,
  });
  //
  // // setInterval(() => typing(abTxt, abStr), 1000);


})();
