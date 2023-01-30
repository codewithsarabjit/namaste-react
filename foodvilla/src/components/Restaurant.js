import {CLOUDINARY_CDN_URL} from "../constants";

const Restaurant = ({name, cuisines, costForTwoString, cloudinaryImageId}) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50" >
            <img src={CLOUDINARY_CDN_URL + cloudinaryImageId} />
            <div className="caption">
                <h3 className="font-bold text-xl">{name}</h3>
                <p>{cuisines.join(", ")}</p>
                <p>{costForTwoString}</p>
            </div>
        </div>
    );
};
export default Restaurant;