import ReactStars from "react-rating-stars-component/dist/react-stars";
// import Star from "react-star-ratings/build/star";

export default function StarRating({rating}) {
  return (
    <div>
        <ReactStars
            count={10}
            edit={false}
            size={24}
            isHalf={true}
            value={rating}
            activeColor="#ffd700"
        />
    </div>
  );
}