import {useState, useEffect} from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurant();
    }, []);

    async function getRestaurant() {
        const response = await fetch(FETCH_MENU_URL + resId);
        const restaurant = await response.json();
        setRestaurant(restaurant?.data);
    } 

    return restaurant;
}

export default useRestaurant;