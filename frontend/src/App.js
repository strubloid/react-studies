import React, { Component } from 'react';
import GoalList from "./components/Goallist/GoalList"
import NewGoal from "./components/Goallist/New/NewGoal"

import './App.css';

class App extends Component {

    state = {
        courseGoals: [{}]
    }

    constructor (props) {
        super(props);
        this.state.courseGoals = [
            {id: 'cg1', text: 'Finish the course'},
            {id: 'cg2', text: 'Learn all about the course Main topic'},
            {id: 'cg3', text: 'Help other students in the course Q&A'}
        ]
    }

    addNewGoalHandler = newGoal => {
        this.setState(state => ({courseGoals: [...state.courseGoals, newGoal]}));
    }

    render () {
        return (
            <React.Fragment>
                <div className="course-goals">
                    <h2>Course Goals</h2>
                    <NewGoal onAddGoal={this.addNewGoalHandler} />
                    <GoalList goals={this.state.courseGoals} />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
