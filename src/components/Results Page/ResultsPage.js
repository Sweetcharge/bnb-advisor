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
            favoritesList: [],
            apiKey: "AIzaSyAVmJ3EWDCAA1Go7BMxBUjcAPH3-9H1Uno",
        }
    }

    componentWillMount() {
        const loc = this.props.history.location.state;
        this.setState({
            location: loc
        });
    }

    updateLocation = (loc) => {
        this.setState({
            location: loc
        });
    }

    updateFavorites = (element) => {
        this.setState(prevState => ({
            favoritesList: [...prevState.favoritesList, element]
            })
        );
    }

    render() {
        return (
            <div className="ResultsPage">
                <NavBar />
                <div className="rhs">
                    <SearchTextbox 
                        currentLocation={this.state.location}
                        // Callback function to update the location searched from the Results page
                        updateLocation={this.updateLocation}
                    />
                    <Results 
                        apiKey={this.state.apiKey}
                        currentLocation={this.state.location}
                    />
                </div>
            </div>
        )
    }
}

export default ResultsPage
