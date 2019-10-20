import React, { Component } from 'react';

export default class EditBeer extends Component {
    render(props) {
        if (this.props.selectedBeer) {
            return (
                <div>
                    <div className="editfields">
                        <div>
                            <label>id: </label>
                            {this.props.addingBeer
                                ? <input
                                    type="number"
                                    name="id"
                                    placeholder="id"
                                    value={this.props.selectedBeer.id}
                                    onChange={this.props.onChange}
                                />
                                : <label className="value">
                                    {this.props.selectedBeer.id}
                                </label>
                            }
                        </div>
                        <div>
                            <label>name: </label>
                            <input
                                name="name"
                                value={this.props.selectedBeer.name}
                                placeholder="name"
                                onChange={this.props.onChange}
                            ></input>
                        </div>
                    </div>
                </div>
            )
        }
        else return (
            <div></div>
        )
    }
}