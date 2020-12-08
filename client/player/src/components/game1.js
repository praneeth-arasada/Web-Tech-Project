import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";


import Timer from "./subs/timer"; 
import Esc1 from "./subs/esc1";
import Fir1 from "./subs/f1";
import Fir2 from "./subs/f2";
import Fir3 from "./subs/f3";
import Win1 from "./subs/win1";

function Game1(){
    console.log(window.data)
      return(
        <Router>
          <div>
          <Timer />
          </div>
          <br />
          <div>
          <Route path="/game1" exact component={Fir1} />
          <Route path="/game1/f2" exact component={Fir2} />
          <Route path="/game1/f3" exact component={Fir3} />
          <Route path="/game1/esc1" exact component={Esc1} />
          <Route path="/game1/win1" exact component={Win1} />
          </div>
          </Router>
      )
  }
  export default Game1;

