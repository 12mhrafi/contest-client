import React from 'react'
import Register from '../../Components/Register/Register'
import PopularContest from './PopularContest/PopularContest'
import Banner from "./Banner/Banner"
import Winners from './Winners/Winners'
const Home = () => {
  return (
    <div >
        <Banner></Banner>
        <PopularContest></PopularContest>
        <Winners></Winners>
    </div>
  )
}

export default Home