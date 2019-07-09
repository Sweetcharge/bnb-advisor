import React from 'react'
import "./results.css"

import Category from "../../Category/Category";
import { MyContext } from "../../../Context"

class Results extends React.Component {
    render() {
        return (
            <div className="Results">
                <Category name={"Food"} query={"food"} lat={this.context.state.lat} long={this.context.state.long} />
                <Category name={"Malls"} query={"mall"} lat={this.context.state.lat} long={this.context.state.long} />
                {/* <Category name={"Hotels"} query={"hotel"}lat={this.context.state.lat} lat={this.context.state.long} />
                <Category name={"Activities"} query={"activities"} lat={this.context.state.lat} lat={this.context.state.long} />
                <Category name={"Adventures"} query={"hiking"} lat={this.context.state.lat} lat={this.context.state.long} />
                <Category name={"Education"} query={"schools"} lat={this.context.state.lat} lat={this.context.state.long} />
                <Category name={"Services"} query={"gas"} lat={this.context.state.lat} lat={this.context.state.long} />
                <Category name={"Produce"} query={"supermarket"} lat={this.context.state.lat} lat={this.context.state.long} /> */}
                <br/>
            </div>
        )
    }
}
Results.contextType = MyContext;
export default Results
