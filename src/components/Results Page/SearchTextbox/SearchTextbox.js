import React from 'react'

import { withRouter } from "react-router-dom";
import "./search.css"

import { FaSearch } from "react-icons/fa"

class SearchTextbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newLocation: ""
        }
    }

    componentWillMount() {
        this.setState({
            newLocation: this.props.searchQuery
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.replace({
            pathname: "/results",
            state: this.state.newLocation
        })
    }

    render() {
        return (
            <div className="SearchTextbox">
            <form onSubmit={this.handleSubmit}>
                <p className="Search-title">Results based off of</p>
                <input 
                    type="text" 
                    placeholder="Enter a location"
                    value={this.state.newLocation}
                    onChange={this.handleChange}
                    name="newLocation"
                />
                <button className="Search-button" >
                    <FaSearch className="FaSearch"/>
                </button>
            </form>
        </div>
        )
    }
}

export default withRouter(SearchTextbox)
