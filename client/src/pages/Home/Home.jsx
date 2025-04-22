import React from 'react'
import "./Home.scss"
import Header from '../../components/Header/Header'
import StatusBar from '../../components/StatusBar/StatusBar'

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <StatusBar/>
    </div>
  )
}

export default Home
