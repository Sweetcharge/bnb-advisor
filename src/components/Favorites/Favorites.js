import React from 'react'

import NavBar from "../Results Page/NavBar/NavBar.js"
import "./favorites.css";

import { MyContext } from "../../Context"
import placeholder from "../placeholder.png"

class Favorites extends React.Component {
    render() {
        const { favoritesList } = this.context.state
        const favorites = favoritesList.map((value, index) => (
            <FavItem
                key={index}
                uniqueID={value.id}
                name={value.childNodes[2].innerHTML} 
                address={value.childNodes[6].innerHTML}
                price={value.childNodes[3].innerHTML}
                rating={value.childNodes[4].innerHTML}
                userRating={value.childNodes[5].innerHTML}
            />
        ));
        return (
            <MyContext.Consumer>
                { (value) => (
                    <div className="Favorites">
                        <NavBar />
                        <div className="Favorites-title">
                            <p>My trip</p>
                        </div>
                        <div className="Favorites-Container">
                            {favorites}
                        </div>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

Favorites.contextType = MyContext;
export default Favorites


const FavItem = (props) => {
    return (
        <div id={props.uniqueID} className="FavItem">
            <div className="fav-img-container">
                <img src={placeholder} alt=""/>
            </div>
            <div className="fav-Info">
                <p className="fav-title">{props.name}</p>
                <p className="fav-price">{props.price}</p>
                <span className="fav-rating">{props.rating}</span>
                <span className="fav-user">{props.userRating}</span>
                <p className="fav-address">{props.address}</p>
            </div>
        </div>
    )
}