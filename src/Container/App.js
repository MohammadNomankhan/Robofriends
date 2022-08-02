import React, { Component } from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import './App.css'

class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			Searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(url => url.json())
		.then(data => this.setState({robots: data}))
	}

	onChangeField = (event) => {

		this.setState({Searchfield : event.target.value})
		
	}




	render(){
		const filteredRobots = this.state.robots.filter(robot => {

			return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())

		})
		

		return (
			<div className="tc custom-bg">
				<div><h1>RoboFriends</h1></div>
				<SearchBox ChangeField={this.onChangeField}/>
				<Scroll>
					
					<CardList details={filteredRobots}/>
				
				</Scroll>
			</div>
		);

	}


} 

export default App;