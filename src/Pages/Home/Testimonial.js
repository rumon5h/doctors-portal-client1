import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      image: people1,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quas vel perferendis exercitationem nihil fugit aspernatur, architecto enim necessitatibus, commodi non, dolor sequi.",
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      image: people2,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quas vel perferendis exercitationem nihil fugit aspernatur, architecto enim necessitatibus, commodi non, dolor sequi.",
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "California",
      image: people3,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quas vel perferendis exercitationem nihil fugit aspernatur, architecto enim necessitatibus, commodi non, dolor sequi.",
    },
  ];
  return (
    <div className="my-24">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primary text-xl">Testimonial</h3>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt=""></img>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
