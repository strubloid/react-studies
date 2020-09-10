import React, { Component } from 'react';
import './UsersList.css'
import UserItem from './UserItem'
import Card from '../../shared/components/UIElements/Card'

class UsersList extends Component {
    state = {}

    constructor (props) {
        super(props);
    }

    render () {
        if (this.props.items.length === 0) {
            return <div className="center">
                <Card>
                    <h2>No users found!</h2>
                </Card>
            </div>
        }

        return <ul className="users-list">
            {this.props.items.map(user => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </ul>
    }
}

export default UsersList;