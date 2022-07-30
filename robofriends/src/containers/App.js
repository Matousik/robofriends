import { render } from "@testing-library/react";
import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox"
//state - description of an app, simply an object that describes - here it is the robots and what is entered into robots. State can change - we change input in search and change which robots do display.
// props are simply things that come from a state - parent feeds a state into child component to create a prop
//we need to enable using state in our app

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => {
            return Response.json();
        })
        .then(users => {
            this.setState({robots: users});
        })
        
    }

    onSearchChange = (event) => { //random name we created
        
        this.setState({ searchfield: event.target.value })
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
                
            </div>
        )
    }
}

export default App;