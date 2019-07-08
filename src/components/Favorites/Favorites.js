import React from 'react'

import NavBar from "../Results Page/NavBar/NavBar.js"

import { MyContext } from "../../Context"

class Favorites extends React.Component {
    componentDidMount() {
        console.log(this.context.state);
    }
    
    render() {
        return (
            <MyContext.Consumer>
                { (value) => (
                    <div>
                        <NavBar />
                        <div className="Favorites-Container">
                            {/* <p>{value.state.favoritesList}</p> */}
                        </div>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

Favorites.contextType = MyContext;
export default Favorites
