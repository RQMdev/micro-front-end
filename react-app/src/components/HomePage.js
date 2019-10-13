import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <div>
    <img
      src="https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=590&h=800&7E4B4CAD-CAE1-4726-93D6A160C2B068B2"
      alt=""
    />
    <div className="navigation">
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
    </div>
  </div>
)

export default HomePage
