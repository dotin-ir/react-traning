
import React from 'react';
import {cities} from '../mock-data.js';


class City extends React.Component {

    render() {
        let options = Object.keys(cities).map(sk => {
            if (sk === this.props.stateKey) {
                return Object.keys(cities[sk]).map(ck => {
                    return <option value={ck}>{cities[sk][ck]}</option>
                });
            }
        });

        return (
            <select>
                {options}
            </select>
        );
    }

}

export default City;