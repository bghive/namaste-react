import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfRestaurants ,setlistOfRestaurants] = useState([]);
    const [filteredlistOfRestaurants ,setfilteredlistOfRestaurants] = useState([]);
    const onlineStatus = useOnlineStatus();

    const [searchText , setSearchText] = useState("");

    useEffect (()=> {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch (
        " https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setlistOfRestaurants (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredlistOfRestaurants (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    // if (listOfRestaurants.length === 0){
    //    return <Shimmer/>
    // }

    
    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline!! Check Internet Connection...</h1>
        );
    }
    
    return listOfRestaurants.length === 0 ? (<Shimmer/>): (
        <div className="body"> 
            <div className="flex items-center">
                <div className="p-4 m-4">
                    <input type="text" className="border border-solid border-black" value = {searchText} 
                    onChange={(e)=> {
                        setSearchText (e.target.value);
                    }}/>
                    <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" 
                    onClick={()=> {
                       const filteredRestauarnts = listOfRestaurants.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredlistOfRestaurants(filteredRestauarnts);
                        console.log(searchText);
                    }}>
                        Search
                    </button>
                </div>
                <div className="p-4 m-4">
                    <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg" 
                    onClick={() =>{
                    const filteredList = listOfRestaurants.filter (
                        (res) => res.info.avgRating > 4.5);
                        setfilteredlistOfRestaurants (filteredList);
                    }}> 
                    Top Rated Restaurants 
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">{
                filteredlistOfRestaurants.map((resturant) => (
               <Link  key={resturant.info.id} to={"/restaurantmenu/" + resturant.info.id}>
                    <RestaurantCard resData ={resturant}/> 
                </Link> 
                )
                )
            }
                
            </div>
  
        </div>
    )
}

export default Body;