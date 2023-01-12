import React from 'react';
import { restaurants } from '../config/restaurants';

const Search = () => {
    return (
        <div>
            <label>Search</label>
            <input type="text" />
            <button>GO</button>
        </div>
    );
};

const Restaurant = () => {
    return (
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ghemfhdccguwa9bjjzxu" />
            <div className="caption">
                <h3>Amrit Sweets</h3>
                <p>Amrit Sweets</p>
                <p>INR 250 FOR TWO</p>
            </div>
        </div>
    );
};

const RestaurantList = () => {
    const allRestaurants = restaurants.filter((d) => d.cardType=="seeAllRestaurants");
    const restaurantCount = (allRestaurants.length > 0) ? allRestaurants[0].data.data.cards.length : 0;
    console.log(allRestaurants[0].data.data.cards);
    return (
        <>
            {
                (
                    <>
                        <div className="card_row">
                            {
                                (restaurantCount > 0) ? 
                                    (allRestaurants[0].data.data.cards.map((r, k) => {
                                        return (
                                            <>
                                                <Restaurant key={k} />
                                            </>
                                        )
                                    })) : ""
                            }
                        </div>
                    </>
                )
            }
        </>
    );
};

const SearchResults = () => {
    return (
        <div className="cards">
            <h2>200 Restaurants</h2>
            <RestaurantList />
        </div>
    );
};

const Body = () => {
    return (
        <div className="body_container">
            <Search />
            <SearchResults />
        </div>
    );
};

export default Body;