import React,{Component} from 'react';
import pic  from './images/gamepart.jpg';
import pic1  from './images/num3.jpg';
import axios from 'axios';

var a1=0,a2=0,a3=0,a4=0
var a5=0,a6=0,a7=0,a8=0
var a9=0,a10=0,a11=0,a12=0
var a13=0,a14=0,a15=0,a16=0



class Mini extends Component{

    constructor(props){
        super(props);
        this.state={
            a:this.props.imp
        }

        this.changeit=this.changeit.bind(this);
    }


    changeit(e){
        e.preventDefault();

        switch(this.props.children){
            case '\u0370': 
                a1=1-a1
                break; 
            case '\u0376': 
                a2=1-a2
                break;
            case '\u037c': 
                a3=1-a3
                break;
            case '\u038f': 
                a4=1-a4
                break;
            
            case '\u0390': 
                a5=1-a5
                break; 
            case '\u0393': 
                a6=1-a6
                break;
            case '\u0394': 
                a7=1-a7
                break;
            case '\u039e': 
                a8=1-a8
                break;

            case '\u03ae': 
                a9=1-a9
                break; 
            case '\u03af': 
                a10=1-a10
                break;
            case '\u03b0': 
                a11=1-a11
                break;
            case '\u03b6': 
                a12=1-a12
                break;

            case '\u03c8': 
                a13=1-a13
                break; 
            case '\u03c9': 
                a14=1-a14
                break;
            case '\u03ca': 
                a15=1-a15
                break;
            case '\u03cf': 
                a16=1-a16
                break;
        }

        this.setState({
            a: 1-this.state.a
        })

    }


    render(){
        var sel = {
            padding: 10,
            margin: 10,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            backgroundColor: "#00deff",
            textAlign: "center"
        };
        var notsel = {
            padding: 10,
            margin: 10,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            backgroundColor: "#ffde00",
            textAlign: "center"
        };
        return(
            <div style={(this.state.a==1) ? sel:notsel} onClick={this.changeit}>
            {this.props.children}
        </ div>
        )
    }
}



class Myblock extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        

        return(
            <div>
            <Mini imp={a1} >{'\u0370'}</Mini>
            <Mini imp={a2} >{'\u0376'}</Mini>
            <Mini imp={a3} >{'\u037c'}</Mini>
            <Mini imp={a4} >{'\u038f'}</Mini>
            <br />
            <Mini imp={a5} >{'\u0390'}</Mini>
            <Mini imp={a6} >{'\u0393'}</Mini>
            <Mini imp={a7} >{'\u0394'}</Mini>
            <Mini imp={a8} >{'\u039e'}</Mini>
            <br />
            <Mini imp={a9} >{'\u03ae'}</Mini>
            <Mini imp={a10} >{'\u03af'}</Mini>
            <Mini imp={a11} >{'\u03b0'}</Mini>
            <Mini imp={a12} >{'\u03b6'}</Mini>
            <br />
            <Mini imp={a13} >{'\u03c8'}</Mini>
            <Mini imp={a14} >{'\u03c9'}</Mini>
            <Mini imp={a15} >{'\u03ca'}</Mini>
            <Mini imp={a16} >{'\u03cf'}</Mini>
            <br />
        </ div>
        )
    }
}






export default class Fir3 extends Component{

    constructor(props){
        super(props);
        
        this.left=this.left.bind(this);    
        this.right=this.right.bind(this);
        
    }

    left(e){
        e.preventDefault();
        if(a5==1 & a8==1 & a15==1 & a3==1 &a1==0&a2==0&a4==0&a6==0&a7==0&a9==0&a10==0&a1==0&a12==0&a13==0&a14==0&a16==0)
        {var code=true}
        var user={id:window.data._id, s3:code}
        axios.post('http://localhost:9000/s3',user)
        .then(res=>{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/game2/s2')   
        })
    }

    right(e){
        e.preventDefault();
        if(a5==1 & a8==1 & a15==1 & a3==1 &a1==0&a2==0&a4==0&a6==0&a7==0&a9==0&a10==0&a1==0&a12==0&a13==0&a14==0&a16==0)
        {var code=true}
        else
        {var code=false}
        var user={id:window.data._id, s3:code}
        axios.post('http://localhost:9000/s3',user)
        .then(res=>{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/game2/esc2')   
        })
    }


    render(){
        
        return(
            <div>
            <div className="nav">
            <ul className="navul">
              <li className="navbar1">
              <button onClick={this.left} className="btnleft">Left</button>
              </li>
              <br /><br /><br />
              <li className="navbar2">
              <button onClick={this.right} className="btnright">Right</button>
              </li>
            </ul>
            </div>
            <img src={pic} style={{width:250, height:250 }} alt="picture missing" />
            <img src={pic1} style={{width:50, height:50 }} alt="picture missing" />
            <Myblock />
        </ div>
        )
    }
}

