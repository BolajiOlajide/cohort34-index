import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    }
  }

  componentWillMount() {
    if (!(this.props.location.state)) {
      this.props.history.push('/')
    };
  }

  componentDidMount() {
    this.setState({ character: this.props.location.state.character })
  }

  render() {
    const {character} = this.state;
    return (
      <div>
        <img src={character.image}/>
        {character.name}
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.status}</p>
      </div>
    )
  }
}

export default Character;
