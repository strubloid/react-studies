import React, { Component } from 'react';
import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card'

import './UserItem.css'
import { Link } from 'react-router-dom'

class UserItem extends Component {
    state = {}

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <li className="user-item">
                <Card className="user-item__content">
                    <Link to={`${this.props.id}/places`}>
                    <div className="user-item__image">
                        <Avatar
                            image={this.props.image}
                            alt={this.props.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{this.props.name}</h2>
                        <h3>{this.props.placeCount} {this.props.placeCount === 1 ? ' Place' : 'Places'}</h3>
                    </div>
                </Link>
                </Card>
            </li>
        );
    }
}

export default UserItem;