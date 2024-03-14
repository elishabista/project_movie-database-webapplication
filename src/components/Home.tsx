import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Navbar from './Navbar'

const Home = () => {
    const fetchSuperHeroes=()=>{
      return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9a1f0154eb285e11c3dbc34456557692')
    }
    const {isLoading,data}=  useQuery('super-heroes',fetchSuperHeroes)
    if(isLoading) return <h2>Loading</h2>
    console.log(data,'data')
  return (
    <div>
        <Navbar  />
    </div>
  )
}

export default Home