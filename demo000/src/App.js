import React, { Component, PureComponent } from 'react';
import './App.css';

//======================================================================

class Box extends PureComponent {
  render() {
    return (
      <div className="Box">
        <h3>
          Number of clicks: <span className="num-clicks">{this.props.numClicks}</span>
        </h3>
        <button className="btn-plus-one" onClick={this.props.onClick}>
          +1
        </button>
      </div>
    );
  }
}

//======================================================================

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicksArray: Array(this.props.numBoxes).fill(0),
      total: 0,
    };
  }

  handleClick(i) {
    const numClicksArray = this.state.numClicksArray.slice();
    numClicksArray[i] = numClicksArray[i] + 1;
    const total = this.state.total + 1;
    this.setState({
      numClicksArray: numClicksArray,
      total: total,
    });
  }

  addBox() {
    this.setState({
      numClicksArray: this.state.numClicksArray.concat([0]),
    });
  }

  render() {
    const boxes = this.state.numClicksArray.map((value, i) => (
      <Box key={i} onClick={() => this.handleClick(i)} numClicks={value} />
    ));
    return (
      <div>
        <button onClick={() => this.addBox()}>Add Box</button>
        <h2>Total: {this.state.total}</h2>
        {boxes}
        <div className="source-info">
          View Source files{' '}
          <a href="https://github.com/thawsitt/react-demos/tree/master/demo000" target="_blank">
            here
          </a>.
        </div>
      </div>
    );
  }
}

//======================================================================

export default App;
