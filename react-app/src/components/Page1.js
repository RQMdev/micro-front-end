import React from 'react'
import { Link } from 'react-router-dom'

const Page1 = () => (
  <div>
    <img
      src="http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg"
      alt=""
    />
    <div className="navigation">
      <Link to="/">Retour</Link>
    </div>
  </div>
)

export default Page1
