import React from 'react'
import "./results.css"

import Category from "../../Category/Category";
// import placeholder from "../../placeholder.png"

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: "",
            loading: true,
            latCoord: "",
            longCoord: ""
        }
    }

    componentWillMount() {
        this.setState({
            searchQuery: this.props.searchQuery,
            latCoord: this.props.lat,
            longCoord: this.props.long
        })
    }

    componentWillReceiveProps(props) {
        this.setState({
            searchQuery: props.searchQuery, 
            latCoord: props.lat,
            longCoord: props.long
        })
    }

    render() {
        return (
            <div className="Results">
                <Category
                    name={"Food"}
                    lat={this.state.latCoord}
                    long={this.state.longCoord}
                    query={"food"}
                    apiKey={this.props.apiKey}
                 />
                 <Category 
                    name={"Malls"}
                    lat={this.state.latCoord}
                    long={this.state.longCoord}
                    query={"mall"}
                    apiKey={this.props.apiKey}
                 />
                 {/* <Category 
                    name={"Hotels"}
                    lat={this.state.latCoord}
                    long={this.state.longCoord}
                    query={"hotel"}
                    apiKey={this.props.apiKey}
                 />
                 <Category 
                    name={"Activities"}
                    lat={this.state.latCoord}
                    long={this.state.longCoord}
                    query={"activities"}
                    apiKey={this.props.apiKey}
                 />
                 <Category 
                    name={"Adventures"}
                    lat={this.state.latCoord}
                    long={this.state.longCoord}
                    query={"hiking"}
                    apiKey={this.props.apiKey}
                 />
                 <Category 
                    name={"Education"}
                    lat={this.state.latCoord}
                    long={this.state.longCoord}
                    query={"schools"}
                    apiKey={this.props.apiKey}
                 />
                 <Category 
                    name={"Services"}
                    lat={this.state.latCoord}
                    long={this.state.longCoord}
                    query={"gas"}
                    apiKey={this.props.apiKey}
                 />
                 <Category 
                    name={"Produce"}
                    lat={this.state.latCoord}
                    long={this.state.longCoord}
                    query={"supermarket"}
                    apiKey={this.props.apiKey}
                 /> */}
                <br/>
            </div>
        )
    }
    
}

export default Results
