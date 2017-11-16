import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {name: "React"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    render () {
    return (
        <div>
        <p> Hello {this.state.name}!</p>
        <input type="text" onChange={this.handleChange}/>
        </div>
        );
    }
}

render(<App name="asghar"/>, document.getElementById('app'));