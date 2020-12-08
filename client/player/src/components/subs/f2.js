import React,{Component} from 'react';
import pic  from './images/photo1.jpg';
import pic1  from './images/num0.jpg';
import axios from 'axios';

var a1=0,a2=0,a3=0,a4=0
var a5=0,a6=0,a7=0,a8=0
var a9=0,a10=0,a11=0,a12=0
var a13=0,a14=0,a15=0,a16=0

class Buttons extends Component {
    
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
            case 'Tiger': 
                a1=1-a1
                break; 
            case 'Bird': 
                a2=1-a2
                break;
            case 'People': 
                a3=1-a3
                break;
            case 'Pen': 
                a4=1-a4
                break;

            case 'Chess': 
                a5=1-a5
                break; 
            case 'Trees': 
                a6=1-a6
                break;
            case 'Paintings': 
                a7=1-a7
                break;
            case 'Lights': 
                a8=1-a8
                break;

            case 'Zebra': 
                a9=1-a9
                break; 
            case 'Lion': 
                a10=1-a10
                break;
            case 'Guns': 
                a11=1-a11
                break;
            case 'Golfstick': 
                a12=1-a12
                break;

            case 'Statue': 
                a13=1-a13
                break; 
            case 'TV': 
                a14=1-a14
                break;
            case 'Carrom': 
                a15=1-a15
                break;
            case 'Books': 
                a16=1-a16
                break;
        }

        this.setState({
            a: 1-this.state.a
        })

    }

    render() {
        var sel={width:80, height:40, margin:15,  backgroundColor:"black", color:"white"}
        var notsel={width:80, height:40, margin:15,  backgroundColor:"white", color:"black"}
        var k={display: "inline-block"}
        return (
            <div style={k} >
                <button style={(this.state.a==1) ? sel:notsel} onClick={this.changeit} >{this.props.children}</button>
            </div>
        );
    }
}




class Myblock extends Component{

    constructor(props){
        super(props);
    }


    render(){
            
        return(
            <div>
            <Buttons imp={a1} >Tiger</Buttons>
            <Buttons imp={a2} >Bird</Buttons>
            <Buttons imp={a3} >People</Buttons>
            <Buttons imp={a4} >Pen</Buttons>
            <Buttons imp={a5} >Chess</Buttons>
            <Buttons imp={a6} >Trees</Buttons>
            <Buttons imp={a7} >Paintings</Buttons>
            <Buttons imp={a8} >Lights</Buttons>
            <Buttons imp={a9} >Zebra</Buttons>
            <Buttons imp={a10} >Lion</Buttons>
            <Buttons imp={a11} >Guns</Buttons>
            <Buttons imp={a12} >Golfstick</Buttons>
            <Buttons imp={a13} >Statue</Buttons>
            <Buttons imp={a14} >TV</Buttons>
            <Buttons imp={a15} >Carrom</Buttons>
            <Buttons imp={a16} >Books</Buttons>
        </ div>
        )
    }
}






export default class Leader extends Component{

    constructor(props){
        super(props);
        
        this.left=this.left.bind(this);    
        this.right=this.right.bind(this);
        
    }

    left(e){
        e.preventDefault();
        if(a5==1 & a8==1 & a16==1 & a7==1 &a1==0&a2==0&a4==0&a6==0&a3==0&a9==0&a10==0&a1==0&a12==0&a13==0&a14==0&a15==0)
        {var code=true}
        else
        {var code=false}
        var user={id:window.data._id, f2:code}
        axios.post('http://localhost:9000/f2',user)
        .then(res=>{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/game1')   
        })
    }

    right(e){
        e.preventDefault();
        if(a5==1 & a8==1 & a16==1 & a7==1 &a1==0&a2==0&a4==0&a6==0&a3==0&a9==0&a10==0&a1==0&a12==0&a13==0&a14==0&a15==0)
        {var code=true}
        var user={id:window.data._id, f2:code}
        axios.post('http://localhost:9000/f2',user)
        .then(res=>{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/game1/f3')   
        })
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

                <p>Try to Escape If You Can</p>
                <button onClick={this.onsubmit}>Escape</button>
            </div>
            <img src={pic} style={{width:250, height:250 }} alt="picture missing" />
            <img src={pic1} style={{width:50, height:50 }} alt="picture missing" />
            <Myblock />
        </ div>
        )
    }
}

