import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.body}</p>
        <div className="flex items-center"> 
        <div className="avatar mr-4">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img  src={review.image} alt="" />
          </div>
        </div>
        <div>
            <h3 className="my-1 text-gray-700 font-bold">{review.name}</h3>
            <h4>{review.location}</h4>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
