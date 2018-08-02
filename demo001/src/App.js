import React, { Component } from 'react';
import './App.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      searchTerm: '',
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value.toUpperCase(), //***
    });
  }

  // Here, input is a controlled component.
  // React's internal state is the single source of truth.
  // You can verify it because all input becomes upper-cased.
  render() {
    const listItems = this.state.list
      .filter((item) => {
        return item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      })
      .map((item, i) => {
        return (
          <li key={i} style={{ color: item.value }}>
            {item.name}
          </li>
        );
      });

    return (
      <div>
        <form>
          <input type="text" value={this.state.searchTerm} onChange={this.onSearchChange} />
        </form>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

class App extends Component {
  names = [
    {
      name: 'red',
      value: '#f00',
    },
    {
      name: 'green',
      value: '#0f0',
    },
    {
      name: 'blue',
      value: '#00f',
    },
    {
      name: 'cyan',
      value: '#0ff',
    },
    {
      name: 'magenta',
      value: '#f0f',
    },
    {
      name: 'yellow',
      value: '#ff0',
    },
    {
      name: 'black',
      value: '#000',
    },
  ];

  render() {
    return (
      <div>
        <List list={this.names} />
        <div className="source-info">
          View Source files{' '}
          <a href="https://github.com/thawsitt/react-demos/tree/master/demo001" target="_blank">
            here
          </a>.
        </div>
      </div>
    );
  }
}

export default App;
