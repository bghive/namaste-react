import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const  menuList = useRestaurantMenu (resId);
  
    if (menuList === null) return <Shimmer/> ;

    const {name,costForTwoMessage,avgRatingString , totalRatingsString ,cuisines} = menuList?.cards[2]?.card?.card.info ;
    const {itemCards} = menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h3>{avgRatingString}({totalRatingsString})</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item) => 
                <li key = {item.card.info.id}>
                    {item.card.info.name} - Rs {item.card.info.price/100}
                </li> )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;