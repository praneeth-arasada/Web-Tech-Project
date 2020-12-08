import React,{Component} from 'react';
import '../css/timer.css'

export default class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
    }

  }
  
  componentDidMount(){
    
    this.timer = setInterval(() => this.setState({
      time:Math.round((Date.now() - window.data.stime)/1000)
    }), 1);
  }

  render() {
    
    return(
      <div>
        <b className="timer">Time Taken: {this.state.time}s</b>
      </div>
    )
  }
}
