import React from 'react'
import { withRouter } from 'react-router-dom';

import Description from "../Description/Description.js";

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            location: ""
        }
    }   

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: "/results",
            state: this.state.location
        })
    }

    render() {
        return (
            <div className="Home">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter a location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        name="location"
                    />
                    <button >
                        Results
                    </button>
                </form>
                <Description />  
            </div>
        )
    }
    
}

export default withRouter(Home);
