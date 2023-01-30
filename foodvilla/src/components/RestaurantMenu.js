import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import {CLOUDINARY_CDN_URL} from "../constants";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restaurant = useRestaurant(resId);

    return (
        <div className="body_container">
        {
            (!restaurant) ? <Shimmer value={1} /> : 
            (
                <div className="card-detail">
                    <h1>Restaurant id {resId}</h1>
                    <h2>{restaurant?.name}</h2>
                    <div className="card-data">
                        <img width="400" height="300" src={CLOUDINARY_CDN_URL + restaurant?.cloudinaryImageId} />
                        <p>{
                            Object.values(restaurant?.menu?.items).map((r, k)=>{
                                return (
                                    <span key={k}>{r?.name}<br/></span>
                                )
                            })
                        }</p>
                    </div>
                </div>
            )
        }
        </div>
    );
}
export default RestaurantMenu;