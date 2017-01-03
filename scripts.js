'use strict';
(() => {
  let clipboard = new Clipboard('#copy-button');

  let pySpan = $("#py-txt")
  let jsSpan = $("#js-txt")

  function drawPythonCode(){
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
        <span class='ind3'> num_cups_coffee = 0</span><br>
        <span class='ind3'> self.avg_hours_of_sleep = 4</span><br>
          <span class='ind3'> self.curr_working_on_project = <span class='pyChar'>True </span></span><br>
        <span class='ind3'> <span class='pyDef'>for</span> c <span class='pyDef'>in</span> <span class='pyChar'>range</span>(importance): </span><br>
        <span class='ind4'> num_cups_coffee++</span><br>
        <span class='ind4'> friends--</span><br>
        <span class='ind2'><span class='pyDef'>def</span> <span class='pyFunc'>finish_project (self): </span> </span><br>
        <span class='ind3'> self.num_projects++</span><br>
        <span class='ind3'> friends++</span><br>
        <span class='ind3'> self.curr_working_on_project = <span class='pyChar'>False </span></span><br>
        <span class='ind3'> self.avg_hours_of_sleep = 7</span><br>
        <span class='ind3'> <span class='pyChar'>print </span> <span class='pyStr'> "git commit -m "whoops forgot <br> <span class='ind4'>to commit && git push origin master"</span></span><br>
      `],
      // typeSpeed: -2000,
      typeSpeed: -40,
    });
  }

  drawPythonCode()
  // drawJavascriptCode()
  let timeoutID = setTimeout(drawJavascriptCode, 11850)

  function drawJavascriptCode() {
    jsSpan.typed({
      strings: [`
        <span class='jsFunc'>const</span> <span class='jsDef'>developer</span> <span class='jsKey'>=</span> (web) <span class='jsFunc'>=></span> { <br>
        <span class='ind2'><span class='jsFunc'>let</span> uninspired <span class='jsKey'>=</span> <span class='jsChar'>true</span></span><br>
        <span class='ind2'><span class='jsKey'>while</span>(uninspired){</span><br>
        <span class='ind3'><span class='jsFunc'>console<span class='jsKey'>.</span>log</span>(<span class='jsStr'>'google interesting API's' </span>);  </span><br>
        <span class='ind3'><span class='jsKey'>if</span> (google<span class='jsKey'>.</span>results <span class='jsKey'>===</span> <span class='jsStr'>'good idea'</span>) { </span><br>
        <span class='ind4'> uninspired <span class='jsKey'>=</span> <span class='jsChar'>false</span> </span><br>
        <span class='ind3'> } </span> <br> <span class='ind2'>}</span>
        <span class='jsComm'>//setup and seed db</span><br>
        <span class='ind2'><span class='jsChar'>CREATE TABLE</span> <span class='jsDef'>sunset </span>(</span><br>
        <span class='ind3'>id<span class='jsChar'> SERIAL PRIMARY KEY</span>,</span><br>
        <span class='ind3'>sunset<span class='jsChar'> REAL NOT NULL</span>,</span><br>
        <span class='ind3'>description<span class='jsChar'> VARCHAR</span></span><br>
        <span class='ind2'>); <span class='jsComm'>//setup REACT component</span></span><br>
        <span class='ind2'><span class='jsFunc'>const</span> sunset <span class='jsKey'> = </span></span><br>
        <span class='ind3'><span class='jsFunc'>Object</span><span class='jsKey'>.</span><span class='jsDef'>keys</span>(this<span class='jsKey'>.</span>props<span class='jsKey'>.</span>sunsets) </span><br>
        <span class='ind3'><span class='jsKey'>.</span><span class='jsDef'>map</span>((sunsID, ind)<span class='jsFunc'> => </span>(</span><br>
        <span class='ind4'><<span class='jsFunc'>SunsetItem</span></span><br>
        <span class='ind5'><span class='jsDef'>quality</span>={this<span class='jsKey'>.</span>props<span class='jsKey'>.</span>sunsets<span class='jsKey'>.</span><br><span class='ind6'>[sunsID].quality}</span><br>
        <span class='ind5'><span class='jsDef'>desc</span>={this<span class='jsKey'>.</span>props<span class='jsKey'>.</span>sunsets<span class='jsKey'>.</span><br><span class='ind6'>[sunsID].description}</span><br>
        <span class='ind4'>/></span><br>
        <span class='ind2'>));</span><br>
        <span class='ind0'>}</span>
      `],
      // typeSpeed: -2000,
      typeSpeed: -40,
    });
  }

})();
