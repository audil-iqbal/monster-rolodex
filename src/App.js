import React,{Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import Folder from './components/folder/Folder';
import {SearchBox} from './components/search-box/search-box.component';
import data from './components/folder/folderdata';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Switch>
        <Route exact path="/" render={() =>
          <div className="App">
            <h1>Monsters Rolodex</h1>
            <a href='/folder'>Click for Folder structure implementation</a>
            <SearchBox 
              placeholder='Search Monsters' 
              handleChange={e => 
                this.setState({searchField: e.target.value })} />
            <CardList monsters={filteredMonster}/>
          </div>} />

        <Route exact path='/folder' render={()=> <Folder folder={data}/>}/>
      </Switch>
    );
  }
}
//withrouter is HOC which gives the component access to history obj in props
export default withRouter(App);
