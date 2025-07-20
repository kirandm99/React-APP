import { CDN_URL } from "../utils/constant";

const RestaurantCard =  (props) =>{
  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = props?.resObj;
    // const{resObj} = props;
    // const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = resObj?.info;
    return (
        <div className="restro-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="restro-logo" alt="restro-logo" src={CDN_URL+ cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;