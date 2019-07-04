import React from 'react'
import "./category.css"
import "./item.css"
import placeholder from "../placeholder.png"
import { FaHeart } from 'react-icons/fa';


class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryName: "",
            lat: "",
            long: "",
            hits: [],
            favorites: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.myRef = React.createRef();
    }

    componentWillReceiveProps(props) {
        this.setState({
            categoryName: props.name,
            lat: props.lat,
            long: props.long
        })

        const link = this.getLink(props.query, 50, props.lat, props.long, props.apiKey)
        this.fetchResults(link)
        
    }

    getLink = (searchTerm, searchRadius, lat, long, apiKey) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const baseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+searchTerm+"&location="+lat+","+long+"&radius="+searchRadius+"&key="+apiKey;

        return proxyurl+baseURL;
    }

    fetchResults = (link) => {
        fetch(link)
            .then( res => res.json() )
            .then( json => {
                // console.log(JSON.stringify(json));
                this.setState({
                    hits: json["results"]
                })
            })
    }

    convertPrice = (priceNumber) => {
        switch(priceNumber) {
            case 1:
                return '$';
            case 2:
                return '$$';
            case 3:
                return '$$$';
            case 4:
                return '$$$$';
            default:
                return "$$$$$"
        }
    }

    convertRating = (ratingNumber) => {
        switch(ratingNumber) {
            case 1:
                return '★';
            case 2:
                return '★ ★';
            case 3:
                return '★ ★ ★';
            case 4:
                return '★ ★ ★ ★';
            default:
                return "★ ★ ★ ★ ★"
        }
    }

    handleClick(e) {
        const targetID = e.currentTarget.parentNode.id
        const buttonID = e.currentTarget.classList.add("favorited");
        const targetElement = document.getElementById(targetID);

        
    }

    render() {
        const ItemComponent = this.state.hits.map((item, iterator) => {
            const name = item["name"]
            const address = 'formatted_address' in item ? item['formatted_address'] : "N/a"
            const price_level = 'price_level' in item ? this.convertPrice(item['price_level']) : "N/a"
            const rating = 'rating' in item ? this.convertRating(item['rating'])  : "N/a"
            const total_user_rating = 'user_ratings_total' in item ? item["user_ratings_total"]  : "N/a"

            const photoRef = 'photos' in item ? item["photos"][0]["photo_reference"]  : ""
            const baseURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&maxheight=100&photoreference="+photoRef+"&key="+this.props.apiKey;
            // console.log(baseURL)

            const id = Math.floor(Math.random() * 10000000);

           return <Item 
            uniqueID={id}
            action={this.handleClick}
            name={name} 
            img={baseURL}
            address={address}
            price={price_level}
            rating={rating}
            userRating={total_user_rating} 
            key={iterator} />
        });


        return (
            <div className="Category"> 
                <p className="Category-title">{this.state.categoryName}</p>
                <div className="ItemContainer">
                    {ItemComponent}
                </div>
            </div>
        )
    }
}

export default Category


const Item = (props) => {
    return (
        <div id={props.uniqueID} className="Item">
            <button onClick={props.action} className="item-btn">{ <FaHeart className="FaHeart-Item" /> }</button>
            <div className="img-container">
                <img src={placeholder} alt=""/>
            </div>
            <p className="item-title">{props.name}</p>
            <p className="item-price">{props.price}</p>
            <span className="item-rating">{props.rating}</span>
            <span className="item-user">({props.userRating})</span>
            <p className="item-address">{props.address}</p>
        </div>
    )
}