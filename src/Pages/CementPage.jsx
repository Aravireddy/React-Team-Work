import React from 'react'
import { ACCData, AmbujaData, UltratechDat } from '../Data/Cement'

const CementPage = () => {
  return (
    <>
    <div className="pageSection">
        {
            UltratechDat.map((item)=>{
                return(
                    <div className='pbody'>
                        <div className="pageImage">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="productModal">
                            {item.Grade},
                            {item.productDesc}
                        </div>
                        <div>
                            <button>BUY</button>  OR  <button>ADD TO CART</button>
                        </div>
                    </div>
                )
            })
            
        }
        {
             ACCData.map((item)=>{
                return(
                    <div className='pbody'>
                        <div className="pageImage">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="productModal">
                            {item.Grade},
                            {item.productDesc}
                        </div>
                        <div>
                            <button>BUY</button>  OR  <button>ADD TO CART</button>
                        </div>
                    </div>
                )
            })
        }
        {
            AmbujaData.map((item)=>{
                return(
                    <div className='pbody'>
                        <div className="pageImage">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="productModal">
                            {item.Grade},
                            {item.productDesc}
                        </div>
                        <div>
                            <button>BUY</button>  OR  <button>ADD TO CART</button>
                        </div>
                    </div>
                )
            })
        }
    </div>

    </>
  )
}

export default CementPage