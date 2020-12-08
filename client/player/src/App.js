import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Quit from "./components/Quit"; 
import Home from "./components/Home";
import Start from "./components/Start";
import Leader from "./components/Leader";
import Newg from "./components/Newg";
import Joing from "./components/Joing"
import Wait from "./components/Wait"
import Game1 from "./components/game1"
import Game2 from "./components/game2"

function App()
{
  return (
    <Router>
      <div className="container">
        <Quit />
        <br/>
        <Route path="/" exact component={Home} />
        
        <Route path="/start" exact component={Start} />
        <Route path="/leader" exact component={Leader} />
        
        
        <Route path="/new" exact component={Newg} />
        <Route path="/join" exact component={Joing} />

        <Route path="/wait" exact component={Wait} />

        <Route path="/game1" exact component={Game1} />
        <Route path="/game2" exact component={Game2} />
      </div>
    </Router>
  );
}
export default App;