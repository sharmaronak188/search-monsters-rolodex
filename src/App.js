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
        <SearchBar placeholder="Search for your favorite monsters" handleChange={e => this.setState({ searchbar: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
