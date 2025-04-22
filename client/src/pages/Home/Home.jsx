import React from 'react'
import "./Home.scss"
import Header from '../../components/Header/Header'
import StatusBar from '../../components/StatusBar/StatusBar'
import Content from "../../components/Content/Content";

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <StatusBar/>
      <Content/>
    </div>
  )
}

export default Home
