import React from 'react'
import "./results.css"

import Category from "../../Category/Category";
import { MyContext } from "../../../Context"

class Results extends React.Component {
    getCoordinates = (location) => {
        location = location.replace(/ /g, "%20");

        const link = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key="+this.context.state.apiKey
        fetch(link)
            .then( res => res.json() )
            .then( json => {
                const lat = json["results"][0]["geometry"]["location"].lat;
                const long = json["results"][0]["geometry"]["location"].lng;

                this.context.setCoordinates(lat, long)
            })
            .catch(error => console.log("ERROR", error))   
    }

    render() {
        this.getCoordinates(this.context.state.searchLocation)
        return (
            <div className="Results">
                <Category name={"Food"} query={"food"} />
                <Category name={"Malls"} query={"mall"} />
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

Results.contextType = MyContext;
export default Results
