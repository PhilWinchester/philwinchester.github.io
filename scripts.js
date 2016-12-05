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
      <span class='jsFunc'>const</span> <span class='jsDef'>developer</span> <span class='jsKey'>=</span> (web) <span class='jsFunc'>=></span> { <br>
      <span class='ind2'><span class='jsFunc'>console<span class='jsKey'>.</span>log</span>(<span class='jsStr'>'git commit -m 'npm init'' </span>);  </span><br>
      <span class='ind2'><span class='jsFunc'>console<span class='jsKey'>.</span>log</span>(<span class='jsStr'>'npm i --save dependencies' </span>);  </span><br>
      <span class='ind2'><span class='jsFunc'>console<span class='jsKey'>.</span>log</span>(<span class='jsStr'>'set up MVC Skeleton' </span>);  </span><br>
      <span class='ind2'><span class='jsFunc'>let</span> uninspired = <span class='jsChar'>false</span></span><br>
      <span class='ind2'><span class='jsKey'>while</span>(<span class='jsKey'>!</span>uninspired){</span><br>
      <span class='ind3'><span class='jsFunc'>console<span class='jsKey'>.</span>log</span>(<span class='jsStr'>'google interesting API's' </span>);  </span><br>
      <span class='ind3'><span class='jsKey'>if</span> (google<span class='jsKey'>.</span>results <span class='jsKey'>===</span> <span class='jsStr'>'good idea'</span>) { </span><br>
      <span class='ind4'> uninspired <span class='jsKey'>=</span> <span class='jsChar'>true</span> </span><br>
      <span class='ind3'> } </span> <br> <span class='ind2'>}</span><br>
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
      <span class='ind3'> self.curr_working_on_project = <span class='pyChar'>False </span></span><br>
      <span class='ind2'><span class='pyDef'>def</span> <span class='pyFunc'>start_project (self, importance): </span> </span><br>
      <span class='ind3'> num_cups = 0</span><br>
      <span class='ind3'> self.avg_hours_of_sleep = 4</span><br>
        <span class='ind3'> self.curr_working_on_project = <span class='pyChar'>True </span></span><br>
      <span class='ind3'> <span class='pyDef'>for</span> c <span class='pyDef'>in</span> <span class='pyChar'>range</span>(importance): </span><br>
      <span class='ind4'> num_cups++</span><br>
      <span class='ind4'> friends--</span><br>
      <span class='ind2'><span class='pyDef'>def</span> <span class='pyFunc'>finish_project (self): </span> </span><br>
      <span class='ind3'> self.num_projects++</span><br>
      <span class='ind3'> friends++</span><br>
      <span class='ind3'> self.curr_working_on_project = <span class='pyChar'>False </span></span><br>
      <span class='ind3'> self.avg_hours_of_sleep = 7</span><br>
      <span class='ind3'> <span class='pyChar'>print </span> <span class='pyStr'> "git commit -m "whoops forgot to commit" && git push origin master</span></span><br>
    `],
    typeSpeed: 1,
  });
  //
  // // setInterval(() => typing(abTxt, abStr), 1000);


})();
//19 - 22
const developer = (web) => {
  console.log("git commit -m 'npm init'");
  console.log("git commit -m 'npm install --save dependencies'");
  console.log("git commit -m 'set up MVC Skeleton'");
  let uninspired = false;
  while (!uninspired) {
    console.log("google insteresting API's");
    if (google.results === 'good idea') {
      uninspired = true;
    }
  } //10


}
