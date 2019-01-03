import React, {Component} from 'react';
import Header from './Header'
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index,delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    console.log(delta)
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }
  


  getHighScore = () =>{
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore>0) {
      return highScore;
    } 
    return null;
  }
  //player id counter
  prevPlayerId = 5

  handleAddPlayer=(name)=>{
    this.setState( prevState=>{
      return{
      players:[
        ...prevState.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    }})
  }

  render() {
    const highScore = this.getHighScore();
    console.log(highScore)
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player,index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            isHighScore={highScore === player.score}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
