import React from 'react'
import { Link } from 'react-router-dom'

const TopHeader = () => {
  return (
    <header>
        <nav>
            <Link to={"/"}>Todo</Link>
            <Link to={"/fibonacci"}>Fibonacci Seriyası</Link>
            <Link to={"/alqoritm"}>Algoritm</Link>
            <Link to={"/redux"}>Redux</Link>
        </nav>
    </header>
  )
}

export default TopHeader