import React,{Component} from 'react';
import pic  from './images/tablet2.PNG';
import pic1  from './images/num5.jpg';
import axios from 'axios';

var a=""


class Buttons extends Component {

    render() {
        return (
            <div >
                
                <button name="Clear" onClick={e => this.props.onClick(e.target.name)}>Clear</button>
                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button><br/>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button><br/>
                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button><br/>
                
            </div>
        );
    }
}





class Myblock extends Component {
    constructor(){
        super();

        this.state = {
            result: a
        }

        this.onClick=this.onClick.bind(this);    
        this.clear=this.clear.bind(this);
    }





    onClick = button => {

        if(button === "Clear"){
            this.clear()
        }

        else {
            a=this.state.result + button
            this.setState({
                result: this.state.result + button
            }
            )
        }
    };


    clear = () => {
        a=this.state.result.slice(0, -1)
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div >
                <b>{this.state.result}</b>
                <Buttons onClick={this.onClick}/>
            </div>
        );
    }
}






export default class Fir1 extends Component{

    constructor(props){
        super(props);
        
        this.left=this.left.bind(this);    
        this.right=this.right.bind(this);
        
    }




    left(e){
        e.preventDefault();
        if(a=="1375")
        {var code=true}
        else
        {var code=false}
        var user={id:window.data._id, s1:code}
        axios.post('http://localhost:9000/s1',user)
        .then(res=>{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/game2/esc2')   
        })
    }

    right(e){
        e.preventDefault();
        if(a=="1375")
        {var code=true}
        else
        {var code=false}
        var user={id:window.data._id, s1:code}
        axios.post('http://localhost:9000/s1',user)
        .then(res=>{
            console.log(res.data)
            window.data=res.data
            this.props.history.push('/game2/s2')   
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
            <img src={pic} style={{width:100, height:100 }} alt="picture missing" />
            <img src={pic1} style={{width:50, height:50 }} alt="picture missing" />
            <Myblock />
        </ div>
        )
    }
}

