import React from 'react'
import { useGetNowPlayingMovies } from './home.query'

const NowShowing = () => {
  const {data}=useGetNowPlayingMovies()
  console.log(data);
  return (
    <div>NowShowing</div>
  )
}

export default NowShowing