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
      searchTerm: event.target.value,
    });
  }

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
          <input type="text" onChange={this.onSearchChange} />
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
      </div>
    );
  }
}

export default App;
