import React from 'react'

import "./search.css"
import { FaSearch } from "react-icons/fa"
import { MyContext } from '../../../Context';

import { handleChange, handleSubmit } from 'lodash';

class SearchTextbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newLocation: ""
        }
    }

    componentWillMount() {
        this.setState({
            newLocation: this.context.state.searchLocation
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const location = this.state.newLocation.replace(/ /g, "%20");

        const link = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key="+this.context.state.apiKey
        fetch(link)
            .then( res => res.json() )
            .then( json => {
                const { setCoordinates } = this.context;
                const lat = json["results"][0]["geometry"]["location"].lat;
                const long = json["results"][0]["geometry"]["location"].lng;

                setCoordinates(lat, long);
            })
            .catch(error => console.log("ERROR", error))
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

SearchTextbox.contextType = MyContext;
export default SearchTextbox;
