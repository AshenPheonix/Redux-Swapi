import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";
import { connect } from 'react-redux'
import {getPeople} from './actions'

class App extends Component {
  
  componentDidMount=e=>{
    this.props.getPeople();
  }

  render() {
    return <CharacterListView />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  
})

const mapDispatchToProps = {
  getPeople
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
