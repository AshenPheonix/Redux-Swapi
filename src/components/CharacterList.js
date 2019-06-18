import React from "react";

import Character from "./Character";
import { connect } from 'react-redux'

const CharacterList = props => {
  if(props.fetching){
    return (<h2>Fetching, please Wait</h2>)
  }else if(props.error){
    return (<h2>Error contacting server</h2>)
  }
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
    characters:state.charsReducer.characters,
    fetching:state.charsReducer.fetching,
    error:state.charsReducer.error
})

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
