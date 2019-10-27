import React, { Component } from 'react';

export default class Beer extends Component {
    render(props) {
        return (
            <li
                onClick={()=>this.props.onSelect(this.props.beer)}
                className={this.props.beer === this.props.selectedBeer ? 'selected' : ''}>
                <button className="delete-button">Löschen</button>
                <div className="beer-element">
                    <div className="badge">{this.props.beer.id}</div>
                    <div className="name">{this.props.beer.name}</div>
                    <div className="untappd"><a href={"https://untappd.com/b/beer/" + this.props.beer.untappd} target="blank">See me on Untappd</a></div>
                </div>
            </li>
        )
    }
}
