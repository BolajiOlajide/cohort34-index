import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import characterAction from '../actions/characterAction';


class GetCharacter extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentWillMount() {
    this.props.getCharacters();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({ characters: nextProps.characters.characters });
  }


  render() {
    const { characters } = this.state;
    console.log(this.props.children);
    const names = characters.map(character =>
      <div className='character' key={character.id}>
        <img src={character.image}/>
        <Link to={{
          pathname: '/character',
          state: { character }
        }}>
          {character.name}
        </Link>
        <p>{character.species}</p>
        <p>{character.gender}</p>
      </div>
    );
    return (
      <div className='grid'>
        {names}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: () => dispatch(characterAction())
  }
}

const mapStateToProps = (state) => ({
  characters: state.character
})

export default connect(mapStateToProps, mapDispatchToProps)(GetCharacter)
