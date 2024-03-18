
import React from 'react'
import { UltratechDat } from '../../../Data/Cement';

const Ultratech = () => {
  return (
    <div>
        {
            UltratechDat.map((items)=>{
                return(
                    <>
                    <div className="boxes">

                        <table>
                            <tr>
                                <td><h3>{items.brand}</h3></td>
                                </tr>
                                <td><img src={items.image} alt="" /></td>


                                <td><h3>{items.Grade}</h3></td>

                                <td><h5>{items.Weight}</h5></td>
                                <td><h5>{items.productDesc}</h5></td>
                                <td><h4>{items.price}</h4></td>
                                <td><button>Buy</button> or <button>Add to cart</button></td>
                            
                        </table>
                        <div className='item' >
                            
                            
                            
                            
                           
                            
                            
                        </div>
                </div>
                </>
                )
                
            })
        }
    </div>
  )
}

export default Ultratech