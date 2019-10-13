import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <div>
    <div>Home Page</div>
    <Link to="/page1">Page 1</Link>
    <Link to="/page2">Page 2</Link>
  </div>
)

export default HomePage
