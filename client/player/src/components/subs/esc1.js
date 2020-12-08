import React,{Component} from 'react';
import axios from 'axios';
import '../css/esc1.css'

export default class Esc1 extends Component{

    constructor(props){
        super(props);


        this.onsubmit=this.onsubmit.bind(this);
        this.left=this.left.bind(this);    
        this.right=this.right.bind(this);
    }



    onsubmit(e){
        e.preventDefault();
        var user=window.data;
        if(user.f1==true & user.f2==true & user.f3==true & user.s1==true & user.s2==true & user.s3==true ){

        axios.post('http://localhost:9000/escape',user)
        .then(res=>{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/game1/win1')
        })}
        else{
            window.alert('Unsuccessful ,Try Again')
        }

    }


    left(e){
        e.preventDefault();
        this.props.history.push('/game1/f3')   
    }

    right(e){
        e.preventDefault();
        this.props.history.push('/game1')   
    
    }

    render(){
        return(
            
            <div>
            <div className="nav">
            <div className="btns">
              <button onClick={this.left} className="btnleft">Left</button>
              <br /><br /><br />
              <button onClick={this.right} className="btnright">Right</button>
            </div>
            </div>
                <p>Try to Escape If You Can</p>
                <button onClick={this.onsubmit}>Escape</button>
            </div>
        )
    }
}
    