import React, { Component } from 'react';
import './NewGoal.css'

class NewGoal extends Component {

    state = {
        goalText: ''
    }

    constructor (props) {
        super(props);
    }

    addGoalHandler = (event) => {

        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: this.state.goalText
        };

        console.log('creating new goal');
        console.log(newGoal);

        this.setState({ goalText: '' })
        this.props.onAddGoal(newGoal);
    }

    setGoalText = event => {
        this.setState({ goalText: event.target.value })
    }

    render () {
        return (
            <form className="new-goal" onSubmit={this.addGoalHandler}>
                <input type="text"  value={this.state.goalText} onChange={this.setGoalText} />
                <button type="submit">Add Goal</button>
            </form>
        );
    }
}

export default NewGoal;