import React, {Component} from 'react';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import NavBar from '../components/NavBar';
import {robots} from '../components/Robots';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield:''
        }
    }

    onSearchChange=(event)=>{ //it is a rule of thumb to use arrow function for any method that you are making. Then "this" refer to the class Object. 
        this.setState({searchfield: event.target.value});
    }

    onSearchButton =() =>{
        this.setState({searchfield:document.getElementById('robot').value});
    }

    onResetButton =() => {
        this.setState({searchfield:""});
    }

    onTextChange = (event) =>{
        if (event.target.value === ""){
            this.onResetButton();
        }
    }


    render(){
        const {robots, searchfield} = this.state
        const filtering = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ?
            <h1>Loading Robots</h1>:
        (
        <div className='tc'>
            <h1 className='f1 ma2'>Robo Friends!</h1>
            <SearchBox searchChange={this.onSearchButton} reset={this.onResetButton} textChange={this.onTextChange}/>
            <NavBar>
                <CardArray props={filtering} />
            </NavBar>
        </div>
        );
    }
}

export default App;