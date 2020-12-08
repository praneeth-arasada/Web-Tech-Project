import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './css/quit.css'

export default class Quit extends Component{
    render(){
        return(
            <nav className="navbar">
            <ul className="navquits">
              <li className="navli">
              <Link to="/" className="nav">Quit</Link>
              </li>
            </ul>
          </nav>
        )
    }
}