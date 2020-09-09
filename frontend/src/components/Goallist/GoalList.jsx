import React, { Component } from 'react';
import './GoalList.css'

class GoalList extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        // console.log('render');
        // console.log(this.props)
        return (
            <ul className="goal-list">
            {this.props.goals.map(goal => (
                <li key={goal.id}>{goal.text}</li>
            ))}
            </ul>
        );
    }
}

export default GoalList;