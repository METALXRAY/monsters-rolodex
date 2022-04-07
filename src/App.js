import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(()=> {
        return {monsters: users}
    },
     () => {
       console.log(this.state);
     }));
    //.then((users) => console.log(users))
}

  render() {
    console.log('render');
    const filteredMonsters = this.state.monsters.filter((monster)=>{
      // [{name: 'Leanne'},{name: 'Yihua'}]
        return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event) => {
            //console.log({startingArray:this.state.monsters});
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(
              () => {
              return { searchField };
            }
            );
          }}
          />
        
        {
          filteredMonsters.map((monster) => {                                            
            return (
                      <div key={monster.id}>
                        <h1>{monster.name}</h1>
                      </div>
            );
          } ) }
      </div>
    );
  }
}
export default App;
