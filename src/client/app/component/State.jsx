
import React from 'react';
import {states} from '../mock-data.js';


class State extends React.Component {

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

    render() {

        let options = Object.keys(states).map(k => {
           return <option value={k}>{states[k]}</option>
        });

        return (
            <select onChange={this.handleChange.bind(this)}>
                {options}
            </select>
        );
    }

}

export default State;