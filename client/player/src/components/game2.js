import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";

import Timer from "./subs/timer"; 
import Esc2 from "./subs/esc2";
import Sec1 from "./subs/s1";
import Sec2 from "./subs/s2";
import Sec3 from "./subs/s3";
import Win2 from "./subs/win2";

function Game2(){
  
      return(
        <Router>
          <div className="container">
          <Timer />
          <br />
          <Route path="/game2" exact component={Sec1} />
          <Route path="/game2/s2" exact component={Sec2} />
          <Route path="/game2/s3" exact component={Sec3} />
          <Route path="/game2/esc2" exact component={Esc2} />
          <Route path="/game2/win2" exact component={Win2} />
          </div>
          </Router>
      )
  }
  export default Game2;

