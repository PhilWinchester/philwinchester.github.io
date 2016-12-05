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

  let pySpan = $("#py-txt")
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
      <span><span class='pyDef'>class</span> <span class='pyFunc'>Developer: </span></span><br>
      <span class='ind2'>  <span class='pyDef'>def</span> <span class='pyFunc'>__init__ (self): </span></span><br>
      <span class='ind3'> self.hobbyist = <span class='pyChar'>True </span></span><br>
      <span class='ind3'> self.enthusiast = <span class='pyChar'>True </span></span><br>
      <span class='ind3'> self.num_projects = 4</span><br>
      <span class='ind3'> self.avg_hours_of_sleep = 7</span><br>
      <span class='ind2'><span class='pyDef'>def</span> <span class='pyFunc'>start_project (self, importance): </span> </span><br>
      <span class='ind4'> num_cups = 0</span><br>
      <span class='ind3'> <span class='pyDef'>for</span> c <span class='pyDef'>in</span> <span class='pyChar'>range</span>(importance): </span><br>
      <span class='ind4'> num_cups++</span><br>
      <span class='ind4'> friends--</span><br>
      <span class='ind2'><span class='pyDef'>def</span> <span class='pyFunc'>finish_project (self): </span> </span><br>
      <span class='ind3'> self.num_projects++</span><br>
      <span class='ind3'> self.num_projects++</span><br>
    `],
    typeSpeed: 10,
  });
  //
  // // setInterval(() => typing(abTxt, abStr), 1000);


})();
