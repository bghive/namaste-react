import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info;
    return(
        <div className="m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200 rounded-lg" >
            <img className="rounded-lg" 
            alt="AFC" 
            src={CDN_URL + cloudinaryImageId }></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;
