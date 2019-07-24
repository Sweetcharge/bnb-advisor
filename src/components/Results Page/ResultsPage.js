import React from 'react'

import NavBar from "./NavBar/NavBar.js";
import SearchTextbox from "./SearchTextbox/SearchTextbox.js";
import Results from "./Main Results/Results.js";
import "./resultsPage.css";

import { MyContext } from "../../Context"

import { getCoordinates } from 'lodash';

class ResultsPage extends React.Component {
    getCoordinates = (location) => {
        location = location.replace(/ /g, "%20");

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

    componentWillMount() {
        this.getCoordinates(this.context.state.searchLocation)
    }

    render() {
        return (
        <div className="ResultsPage">
            <NavBar />
            <div className="rhs">
                <SearchTextbox />
                <Results />
            </div>
        </div>
        )
    }
}

ResultsPage.contextType = MyContext;
export default ResultsPage
