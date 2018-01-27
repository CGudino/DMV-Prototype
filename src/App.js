import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Fresno, CA',
      currentNumber: 'What is your current number?',
      F: 25,
      G: 13,
      C: 46
    }

    this.changeLocation = this.changeLocation.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
  }

  changeLocation() {
    let newLocation = prompt('Where is your DMV located?');
    this.setState({
      location: newLocation
    });
  }

  changeNumber() {
    let newNumber = prompt('What is your current number?');
    this.setState({
      currentNumber: `Your number is ${newNumber.toUpperCase()}`
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        F: this.state.F + 1
      });
    }, 5300);
    setInterval(() => {
      this.setState({
        G: this.state.G + 1
      });
    }, 18500);
    setInterval(() => {
      this.setState({
        C: this.state.C + 1
      });
    }, 12350);
  }

  render() {
    return (
      <div id="App">
        <AppBar
          title='DMV App Prototype'
        />

        <div id='location'>
          <h3>Your current location is:</h3>
          <h2>{this.state.location}</h2>
          <RaisedButton
            label='Change location'
            primary={true}
            onClick={this.changeLocation}
          />
        </div>

        <div id='current-number'>
          <div onClick={this.changeNumber}>
            {this.state.currentNumber}
          </div>
        </div>

        <div id='list'>
          <h1>Now serving</h1>
          <h1>F{this.state.F}</h1>
          <h1>G{this.state.G}</h1>
          <h1>C{this.state.C}</h1>
        </div>

        <div id='ticket'>
          <RaisedButton
            label='Get ticket'
            primary={true}
            fullWidth={true}
            onClick={() => alert('Ticket reservations coming soon!')}
          />
        </div>
      </div>
    );
  }
}

export default App;
