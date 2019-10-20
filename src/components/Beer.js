import React, { Component } from 'react';

export default class Beer extends Component {
    render(props) {
        return (
            <li>
                <button className="delete-button">Löschen</button>
                <div className="beer-element">
                    <div className="badge">{this.props.beer.id}</div>
                    <div className="name">{this.props.beer.name}</div>
                </div>
            </li>
        )
    }
}
