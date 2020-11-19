import RecipesButton from './components/RecipesButton';
import React, { Component } from 'react';
import recipes from './data'
import './App.css';

class App extends Component {
  

  render() {
    return (
      
      <div class="App" >
        <div class="title" ><img class='logo' src="logo1.png"></img> BrewKanoo</div>
           <RecipesButton recipes={recipes} /> 
      </div>
     
    );
  }
}



export default App;
