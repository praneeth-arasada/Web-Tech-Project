import React,{Component} from 'react';
import axios from 'axios';
import './css/wait.css'

export default class Wait extends Component{
    constructor(props){
        super(props);
        
        this.onstart=this.onstart.bind(this);
    }



    onstart(e){
        e.preventDefault();
        var user={id:window.data._id}
        axios.post('http://localhost:9000/starting',user)
        .then(res=>{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/game1')   
        })
    }

    render(){
        var r=window.data.room
        return(
            <div>
                <div className="info">
                <p>Click Begin Only After Both Of You Are Ready</p>
                <p>Give the Room code {r} to the other player</p>
                </div>
                <button onClick={this.onstart} className="btnbegin">Begin</button>
            </div>
        )
    }
}