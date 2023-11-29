import React from 'react'
import { Link } from 'react-router-dom';

const PopularContestCard = ({contest}) => {
  
  const {_id,contestName,image,shortDescription,attemptedCount} = contest;
  
    return (
    <div>
          <img src={image} alt="" />
          <h2>{contestName}</h2>
          <p>{attemptedCount}</p>
          <p>{shortDescription}</p>
          <Link to={`/viewDetails/${_id}`}><button>Details</button></Link>
    </div>
  )
}

export default PopularContestCard