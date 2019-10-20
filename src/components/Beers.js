import React, { Component } from 'react';
import Beer from './Beer';
import EditBeer from './EditBeer';

export default class Beers extends Component {
    state = { beers: [], addingBeer: false};

    constructor() {
        super();
        this.state = { beers: [] };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('/api/beers').then(result => result.json()).then(json =>{
            this.setState({ beers : json });
        })
    }

    handleSelect(beer) {
        this.setState({selectedBeer: beer});
    }

    handleSave(beer) {

    }

    handleCancel() {
        this.setState({selectedBeer: null});
    }

    handleChange(event) {
        let selectedBeer = this.state.selectedBeer;
        selectedBeer[event.target.name] = event.target.value;
        this.setState({selectedBeer: selectedBeer});
    }

    render() {
        return (
            <div>
                <ul className="beers">
                    {
                        this.state.beers.map(beer => {
                            return (
                            <Beer beer={beer} onSelect={this.handleSelect} selectedBeer={this.state.selectedBeer}/>
                            );
                        })
                    }
                </ul>
                <div className="editarea">
                    <EditBeer
                        addingBeer={this.state.addingBeer}
                        selectedBeer={this.state.selectedBeer}
                        onChange={this.handleChange}
                        onSave={this.handleSave}
                        onCancel={this.handleCancel}
                    />
                </div>
            </div>
        );
    }
}