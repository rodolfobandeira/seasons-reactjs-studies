import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }


  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <p>Error: { this.state.errorMessage}</p>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      )
    }

    return (<div>Loading</div>)
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))

