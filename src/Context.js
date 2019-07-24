import React, { Component } from 'react';

import { state } from 'lodash';

const MyContext = React.createContext();

class Context extends Component {
    state = {
        loading: true,
        favoritesList: [],
        searchLocation: "",
        lat: "",
        long: "",
        apiKey: "AIzaSyC5-LNIzH6GGVYF0mU2lv0CNsDr8UrKZys"
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                setLoading: (arg) => {
                    this.setState((prevState) => ({
                            loading: arg
                        })
                    );
                },
                setLocation: (location) => {
                    this.setState((prevState) => ({
                        searchLocation: location
                        })
                    );
                },
                setCoordinates: (lat, long) => {
                    this.setState((prevState) => ({
                        lat: lat,
                        long: long
                        })
                    );
                },
                addToFavorites: (item) => {
                    this.setState(prevState => ({
                        favoritesList: [...prevState.favoritesList, item]
                        })
                    );
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default Context;
export { MyContext };