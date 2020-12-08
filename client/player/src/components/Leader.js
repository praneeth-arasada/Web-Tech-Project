import React,{Component} from 'react';
import axios from 'axios';
import './css/leader.css'

const Games=props=>(
    <tr>
        <td>{props.game.name1}</td>
        <td>{props.game.name2}</td>
        <td>{props.game.time}</td>
    </tr>
)



export default class Leader extends Component{
    constructor(props){
        super(props);
        this.state={games:[]};
        console.log("hi")
        this.gamelist=this.gamelist.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:9000/leader')
        .then(res =>{
            this.setState({
                games:res.data
            });
        })
        .catch((err)=>{
            console.log(err);
        }
        )
    }
    gamelist()
    {
       return this.state.games.map(c =>{
           return <Games game={c} />
       }) 
    }
    render(){
        return(
            <div>
                <h3>LeaderBoards</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Player 1</th>
                            <th>Player 2</th>
                            <th>Time taken</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gamelist()}
                    </tbody>
                </table>
            </div>
        )
    }
}