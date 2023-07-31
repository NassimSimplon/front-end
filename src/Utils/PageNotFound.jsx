import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='not_Found'>Page Introuvable !!
    
      <h3>Aller a la page <Link to=''>Acceuil</Link> </h3>

    </div>
  )
}

export default PageNotFound