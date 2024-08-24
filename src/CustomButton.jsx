import React from 'react'
import { Link } from 'react-router-dom';


const CustomButton = () => {
    
  return (
    <div>  
      <Link to={'services'}>
      
      <button> Servicios IT </button>
        
      </Link>
    </div>
  )
}

export default CustomButton;
