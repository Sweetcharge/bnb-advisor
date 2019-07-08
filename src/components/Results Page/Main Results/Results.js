import React from 'react'
import "./results.css"

import Category from "../../Category/Category";

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            lat: "",
            long: ""
        }
    }

    componentWillMount() {
        this.getCoordinates(this.props.currentLocation)
    }

    componentWillReceiveProps(props) {
        this.getCoordinates(props.currentLocation)
    }

    getCoordinates = (location) => {
        location = location.replace(/ /g, "%20");

        const link = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key="+this.props.apiKey
        fetch(link)
            .then( res => res.json() )
            .then( json => {
                this.setState({
                    lat: json["results"][0]["geometry"]["location"].lat,
                    long: json["results"][0]["geometry"]["location"].lng
                })
            })   
    }

    render() {
        return (
            <div className="Results">
                <Category
                    name={"Food"}
                    lat={this.state.lat}
                    long={this.state.long}
                    query={"food"}
                    apiKey={this.props.apiKey}
                 />
                 {/* <Category 
                    update={this.props.update}
                    name={"Malls"}
                    lat={this.state.latCoord}
                    long={this.state.longCoord}
                    query={"mall"}
                    apiKey={this.props.apiKey}
                 /> */}
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
