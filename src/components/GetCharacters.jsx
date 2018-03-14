import React from 'react';
import { connect } from 'react-redux';

import characterAction from '../actions/characterAction';


class GetCharacter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.props.getCharacters();
  }


  render() {
    return (
      <div> Hello world </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  getCharacters: () => dispatch(characterAction());
}

const mapStateToProps = (state) => ({
  characters: state.characters
})

export default connect(null, mapDispatchToProps)(GetCharacter)