import React, { useRef, useState } from "react";
import win from "../../../../src/assets/images/win.jpg";
const WinnerCard = ({ winner }) => {
  const {
    _id,
    contestName,
    contestPrice,
    image,
    email,
    name,
    photo,
    participants,
    contestTypes,
  } = winner;

  return (
  
        <div className="shadow-lg hover:border-spacing-12 hover:skew-x-2 transform hover:shadow-2xl">
          <img src={win} alt="" />
          <div className="p-3">
            <h2 className="text-xl font-medium">{name || "username"}</h2>
            <p>Catergory: {contestTypes}</p>
          </div>
        </div>
     
   
  );
};

export default WinnerCard;
