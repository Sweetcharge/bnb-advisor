import React from 'react'
import { withRouter } from 'react-router-dom';

import { MyContext } from "../../Context";
import "./Home.css";

import { handleChange, handleSubmit } from 'lodash';

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
        this.context.setLocation(this.state.location);
    }

    render() {
        return (
            <div>
                <div className="Home">
                    <p className="home-title">Roadtrips made easier.</p>
                    <form onSubmit={this.handleSubmit} className="home-form">
                        <input 
                            type="text" 
                            placeholder="Enter a location"
                            value={this.state.location}
                            onChange={this.handleChange}
                            name="location"
                            className="home-input"
                        />
                        <button className="home-btn">
                            Search
                        </button>
                    </form>  
                </div>
            </div>
        )
    } 
}

Home.contextType = MyContext;
export default withRouter(Home);

