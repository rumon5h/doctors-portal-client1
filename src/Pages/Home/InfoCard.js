import React from 'react';

const InfoCard = ({img, bgColor, cardTitle, body}) => {
    return (
        <div className={`card lg:card-side p-3 m-2 text-white shadow-xl ${bgColor}`}>
        <figure><img src={img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{body}</p>
          
        </div>
      </div>
    );
};

export default InfoCard;