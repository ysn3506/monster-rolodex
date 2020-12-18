import React , { Component } from 'react'
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'


class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField:''
    }
    // this.handleChange=this.handleChange.bind(this)
    // handleChange fonksiyonunu arrow function olarak yazdığımız içinyukarıdaki şekilde bind etmemize gerek kalmadı.
  }
  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))

  }

  //handleChange fonksiyonunu arrow function olarak yazarsak direk this terimini bind ediyor.
  // handleChange(e){
  //   this.setState({searchField:e.target.value})
  // }

  handleChange=(e)=>{
    this.setState({searchField:e.target.value})
  }

  render() {
    const { monsters,searchField}=this.state
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (<div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder='Search Monster'

        //handleChange= {e=>this.handleChange} Aynı şey
        handleChange= {this.handleChange}
      />
      <CardList monsters={filteredMonsters }></CardList>
      
    </div>)




  }






}

export default App;
