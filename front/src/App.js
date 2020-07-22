import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
