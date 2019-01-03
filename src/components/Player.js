import React,{PureComponent} from 'react'
import Counter from './Counter'
import Icon from './Icon'

class Player extends PureComponent {
  render(){
    return (
      <div className="player">
        <span className="player-name">
        <Icon isHighScore={this.props.isHighScore}/>
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          { this.props.name }
        </span>
  
        <Counter 
        score={this.props.score} 
        index={this.props.index}
        changeScore={this.props.changeScore}
        />
      </div>
    );
  }
}

  export default Player