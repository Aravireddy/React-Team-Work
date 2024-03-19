import React from 'react'
import { UltratechDat } from '../../Data/Cement';

function Productdetails() {
  return (
    <div>
      {
        UltratechDat.map((item)=>{
          return(
           <h1>{item.Grade}</h1>
          )
          
        })
      }
    </div>
  )
}

export default Productdetails