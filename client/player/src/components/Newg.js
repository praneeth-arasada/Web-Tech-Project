import React,{Component} from 'react';
import axios from 'axios';
import './css/newg.css'

export default class Newg extends Component{
    
    constructor(props){
        super(props);
        this.state={
            name:''
        }
        
        this.onchange=this.onchange.bind(this);
        this.onsubmit=this.onsubmit.bind(this);
    }


    onchange(e){
        this.setState({
            name:e.target.value
        });
    }


    onsubmit(e){
        e.preventDefault();
        var user={name:this.state.name}
        axios.post('http://localhost:9000/user1',user)
        .then(res=>{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/wait')   
        })
    }

    
    render(){
        return(
            <div>
            <h3>Create a New Room</h3>
            <form onSubmit={this.onsubmit}>
            <div className="form-group"> 
            <label>Enter Your Name: </label>
            <input  type="text"
                required
                className="forminput"
                value={this.state.name}
                onChange={this.onchange}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Create Room" className="btncreate" />
          </div>
            </form>
            </div>
        )
    }
}



