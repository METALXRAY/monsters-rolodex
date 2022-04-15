import "./App.css";
// import { Component } from 'react';
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
	const [searchField, setSearchField] = useState(""); // [value, setvalue]
	// console.log(searchField);
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	// const [stringField, setStringField] = useState('');

	//console.log('render');

	useEffect(() => {
		//console.log('effect fired');
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newfilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newfilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);

		// this.setState(
		//   () => {
		//   return { searchField };
		// }
		// );
	};

	// const onStringChange = (event) => {
	//   setStringField(event.target.value);
	// };

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				className='monstors-search-box'
				onChangeHandler={onSearchChange}
				placeholder='search monsters'
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// class App extends Component {
//   constructor()
//   {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users) => this.setState(()=> {
//         return {monsters: users}
//     },
//      () => {
//        //console.log(this.state);
//      }));
//     //.then((users) => console.log(users))
// }

// onSearchChange = (event) => {
//   //console.log({startingArray:this.state.monsters});
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(
//     () => {
//     return { searchField };
//   }
//   );
// }

//   render() {

//     //console.log('render');

//     const { monsters , searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster)=>{
//         return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">

//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//         className='monstors-search-box'
//         onChangeHandler = {onSearchChange}
//         placeholder='search monsters'

//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
export default App;
