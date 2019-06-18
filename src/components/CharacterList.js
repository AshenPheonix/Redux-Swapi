import React from "react";

import Character from "./Character";
import { connect } from 'react-redux'

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
    characters:state.charsReducer.characters
})

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
