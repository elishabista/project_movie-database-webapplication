import React from 'react'
import { useGetUpcomingMovies } from './home.query';

const Upcoming = () => {
  const {data}=useGetUpcomingMovies()
  console.log(data, "vv");
  return (
    <div>Upcoming</div>
  )
}

export default Upcoming