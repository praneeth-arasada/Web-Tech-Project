import React,{Component} from 'react';
import axios from 'axios';
import './css/joing.css'

export default class Joing extends Component{

    constructor(props){
        super(props);

        this.state={
            name:'',
            room:101
        }

        this.onchangen=this.onchangen.bind(this);
        this.onchanger=this.onchanger.bind(this);
        this.onsubmit=this.onsubmit.bind(this);
    }


    onchangen(e){
        this.setState({
            name:e.target.value
        });
    }

    onchanger(e){
        this.setState({
            room:e.target.value
        });
    }


    onsubmit(e){
        e.preventDefault();
        var user={
            name:this.state.name,
            room:this.state.room
        }
        axios.post('http://localhost:9000/user2',user)
        .then(res=>{
            if(res.data=="no")
            {alert('Sorry but that room does not exist')}
            else{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/game2')}
        })

    }


    render(){
        return(
            <div>
            <h3>Join a Room</h3>
            <form onSubmit={this.onsubmit}>
            <div className="form-group"> 
            <label>Enter Your Name: </label>
            <input  type="text"
                required
                className="forminput"
                value={this.state.name}
                onChange={this.onchangen}
                />
          </div>

          <div className="form-group"> 
            <label>Enter Room ID: </label>
            <input  type="text"
                required
                className="forminput"
                value={this.state.room}
                onChange={this.onchanger}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Join Room" className="btnjoinroom" />
          </div>
            </form>
            </div>
        )
    }
}