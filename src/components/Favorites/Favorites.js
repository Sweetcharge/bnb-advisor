import React from 'react'

import NavBar from "../Results Page/NavBar/NavBar.js"
import "./favorites.css";

import { MyContext } from "../../Context"

class Favorites extends React.Component {
    componentDidMount() {
        const { favoritesList } = this.context.state
        this.favoriteComponent = favoritesList.map(value => value);
    }
    render() {
        console.log(this.favoriteComponent);
        return (
            <MyContext.Consumer>
                { (value) => (
                    <div className="Favorites">
                        <NavBar />
                        <div className="Favorites-Container">
                            <div className="Favorites-title">
                                <p>My trip</p>
                            </div>
                            
                        </div>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

Favorites.contextType = MyContext;
export default Favorites
