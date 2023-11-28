import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewDeatails = () => {
    const contestInfo = useLoaderData();

    const {_id,contestName,image,shortDescription,attemptedCount} = contestInfo;

    console.log(contestInfo)
  return (
    <div>
        <p>{contestName}</p>
    </div>
  )
}

export default ViewDeatails