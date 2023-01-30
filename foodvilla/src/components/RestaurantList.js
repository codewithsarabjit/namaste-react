import React from 'react';
import { Link } from "react-router-dom";
import Restaurant from './Restaurant';

const RestaurantList = (props) => {
    return (
        <>
            {
                (props.cards.map((r, k) => {
                    return (
                        <React.Fragment key={k}>
                            <Link to={"restaurant/" + r.data.id}><Restaurant {...r.data} /></Link>
                        </React.Fragment>
                    )
                }))
            }
        </>
    );
};
export default RestaurantList;