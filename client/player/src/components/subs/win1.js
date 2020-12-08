import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/win.css'

export default class Win1 extends Component{
    render(){
        return(
            <div>
            <h1>Congrats You Succesfully Escaped</h1>
            <p>press quit to go to main menu</p></div>
        )
    }
}