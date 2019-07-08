import React from 'react'

import NavBar from "./NavBar/NavBar.js";
import SearchTextbox from "./SearchTextbox/SearchTextbox.js";
import Results from "./Main Results/Results.js";
import "./resultsPage.css";

class ResultsPage extends React.Component {
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

export default ResultsPage
