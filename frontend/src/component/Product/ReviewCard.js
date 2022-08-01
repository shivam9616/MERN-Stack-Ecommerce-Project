import { Rating } from "@material-ui/lab";
import React from "react";
import { useSelector } from "react-redux";
import "./ReviewCard.css"

const profilePng =  require("../../images/Profile.png");

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };
  
  const { user, isAuthenticated } = useSelector(
    (state) => state.user
  );
  
  return (
    <div className="reviewCard">
      {/* <img src={review.imgUrl ? review.imgUrl : profilePng } alt="User" /> */}
      <img src={isAuthenticated ? (user.name === review.name ? user.avatar.url : profilePng) :  profilePng} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;