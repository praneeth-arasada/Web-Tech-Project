import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './css/home.css'

export default class Leader extends Component{
    render(){
        
        return(
            
            <div>             
              <Link to="/start" className="navstart">Start</Link>
              <br/><br/><br/>
              <Link to="/leader" className="navleader">LeaderBoards</Link>
          </div>
          
        )
    }
}