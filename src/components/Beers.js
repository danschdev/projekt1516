import React, { Component } from 'react';
import Beer from './Beer';

export default class Beers extends Component {
    state = { beers: [] };

    componentDidMount() {
        fetch('/api/beers').then(result => result.json()).then(json =>{
            this.setState({ beers : json });
        })
    }

    render() {
        return (
            <div>
                <ul className="beers">
                    {
                        this.state.beers.map(beer => {
                            return (
                            <Beer beer={beer}/>
                            );
                        })
                    }
                </ul>
                <div className="editarea">
                    {
                        //EditForm
                    }
                </div>
            </div>
        );
    }
}