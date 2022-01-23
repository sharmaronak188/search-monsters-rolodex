import React from "react";
import { CardList } from './components/card-list/cardlist.component';
import { SearchBar } from "./components/search-bar/searchbar.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchbar: ''
    };

    /* Binding this keyword to the handleChange function as it is not binded for a particular function in
      Javascript but it is binded for render() function which we borrow from React.Component or {Component}*/
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   this.setState({ searchbar: e.target.value });
  // }

  /* Arrow functions can already set the context of this keyword when whole setState is defined. That's the 
  crazy thing about arrow functions that you actually call dot bind on them they automatically gets what's 
  called lexical scoping. That means they binds this context to the place where they were defined in the 
  first place. So better to always use Arrow functions. */
  handleChange = e => {
    this.setState({ searchbar: e.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    // Destructuring the monsters and searchbar which we get from this.state
    const { monsters, searchbar } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchbar.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBar placeholder="Search for your favorite monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
