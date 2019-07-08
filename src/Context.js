import React, { Component } from 'react';

const MyContext = React.createContext();

class Context extends Component {
    state = {
        favoritesList: [],
        searchLocation: "",
        lat: "",
        long: "",
        apiKey: "AIzaSyAVmJ3EWDCAA1Go7BMxBUjcAPH3-9H1Uno"
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                setLocation: (location) => {
                    this.setState((prevState) => {
                        return {
                            searchLocation: location
                        }
                    });
                },
                setCoordinates: (lat, long) => {
                    this.setState((prevState) => {
                        return {
                            lat: lat,
                            long: long
                        }
                    });
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