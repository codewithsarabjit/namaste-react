import React from 'react';
import RestaurantList from './RestaurantList';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import {RESTAURANT_LIST_API_URL} from "../constants";
import useOnline from "../utils/useOnline";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]); 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 

    const searchRestaurants = () => {
        setFilteredRestaurants(restaurants.filter((d) => d?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())));
    };

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(RESTAURANT_LIST_API_URL);
        const json = await data.json();
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>Offline, please check your internet connection!!</h1>
    }

    return (
        <div className="">
            <div className='p-5 bg-pink-50 my-5'>
                <input type="text" 
                    className='focus:bg-green-200 p-2'
                    placeholder="Start your search here"
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <button className='p-2 m-2 bg-purple-900 text-white hover:bg-gray-500'
                onClick={()=> searchRestaurants()}>Search</button>
                <span>{searchText}</span>
            </div>
            <h2 className='px-2 font-bold'>{filteredRestaurants.length} Restaurants</h2>
            {
                (restaurants.length!==0 && filteredRestaurants.length===0) ? <h1>No Restaurants match your filter!</h1> :
                    
                (
                    <div className="flex flex-wrap">
                    {
                        (filteredRestaurants.length === 0) 
                        ?  <Shimmer value={15} /> 
                        : <RestaurantList cards={filteredRestaurants} />
                    }
                    </div>
                )
            }
        </div>
    );
};

export default Body;