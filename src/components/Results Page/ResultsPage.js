import React from 'react'

import NavBar from "./NavBar/NavBar.js";
import SearchTextbox from "./SearchTextbox/SearchTextbox.js";
import Results from "./Main Results/Results.js";
import "./resultsPage.css";

class ResultsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "",
            apiKey: "AIzaSyAVmJ3EWDCAA1Go7BMxBUjcAPH3-9H1Uno",
            latCoordinate: "",
            longCoordinate: ""
        }
    }

    componentWillMount() {
        const loc = this.props.history.location.state;
        this.setState({
            location: loc
        }, this.getCoordinates(loc));
    }

    getCoordinates = (location) => {
        location = location.replace(/ /g, "%20");

        const link = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key="+this.state.apiKey
        fetch(link)
            .then( res => res.json() )
            .then( json => {
                this.setState({
                    latCoordinate: json["results"][0]["geometry"]["location"].lat,
                    longCoordinate: json["results"][0]["geometry"]["location"].lng
                })
            })   
            // console.log(link);
    }

    // Used for when a user searches for a new location via the results page
    componentWillReceiveProps(props) {
        if(this.props.location.state !== props.location.state) {
            let loc = props.location.state;
            this.getCoordinates(loc)
            this.setState({
                location: props.location.state
            })
        }
    }

    render() {
        return (
            <div className="ResultsPage">
                <NavBar />
                <div className="rhs">
                <SearchTextbox searchQuery={this.state.location}/>
                <Results 
                    lat={this.state.latCoordinate} 
                    long={this.state.longCoordinate} 
                    searchQuery={this.state.location}
                    apiKey={this.state.apiKey}
                />
                </div>
            </div>
        )
    }
}

export default ResultsPage
