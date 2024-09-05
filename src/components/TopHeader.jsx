import React from 'react'
import { Link } from 'react-router-dom'

const TopHeader = () => {
  return (
    <header>
        <nav>
            <Link to={"/"}>Todo</Link>
        </nav>
    </header>
  )
}

export default TopHeader