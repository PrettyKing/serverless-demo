import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Home: FC = () => {
  return (
    <>
      <h1>Home</h1>
      <NavLink to="demos/1/">测试页</NavLink>
      &nbsp; &nbsp;
      <NavLink to="store">测试Hook</NavLink>
    </>
  )
}

export default Home
