import React from 'react';
//import List from './List';
import { hot } from 'react-hot-loader';

var items = {};
class ListItem extends React.Component {

  render() {
    return (
      <p>{this.props.item}</p>
    );
  }
}

class List extends React.Component {

  render() {
    let itemsElements = this.props.items.map((item, index) => {
      return <ListItem item={item}></ListItem>;
    });
    return (
      <ul>
        {itemsElements}
      </ul>
    );
  }
}
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      clicked: false,
      word: " "
    };
  }

  changeHandler(event) {
    this.setState({ word: event.target.value });
    console.log("change", event.target.value);
  }

  clickHandler() {
    console.log("Clicked!");
    items.push(event.target.value);
    this.setState({ word: ' ' });
  }

  render() {
    console.log("Rendering App")
    return (
      <div>
        <input onChange={(event) => { this.changeHandler(event); }} value={this.state.word}></input>
        <button onClick={() => { this.clickHandler() }}>Add To List</button>
        <List item={items} />
      </div>
    );
  }
}

export default hot(module)(App);

