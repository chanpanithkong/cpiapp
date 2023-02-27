import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://172.16.17.171:5000/userslist`
})

class Test extends Component {
    state = {
        user: []
    }
    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({user: res.data})
        })
    }

    state = {
        matches: []
    }
    showMatches = () => (
        <div>
            Test WS
        </div>
    )
    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Test;