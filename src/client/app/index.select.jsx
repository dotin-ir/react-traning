import React from 'react';
import {render} from 'react-dom';
import State from "./component/State.jsx";
import City from "./component/City.jsx";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            stateKey: "1"
        };
        this.handleStateChanged = this.handleStateChanged.bind(this);
    }

    handleStateChanged(stateKey) {
        console.log(stateKey);
        this.setState({stateKey: stateKey});
    }

    render () {
        return (
            <div>
                <State onChange={this.handleStateChanged}/>
                <City stateKey={this.state.stateKey}/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));