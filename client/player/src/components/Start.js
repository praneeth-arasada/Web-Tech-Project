import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './css/start.css'

export default class Create extends Component{
    render(){
        
        return(
            <div>
              <Link to="/new" className="navnewroom">Create New Room</Link>
              <br/><br/><br/>
              <Link to="/join" className="navjoinroom">Join Room</Link>
          </div>
        )
    }
}