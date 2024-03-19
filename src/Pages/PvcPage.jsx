
import React from 'react'
import { AshirwadData, FinolexData, SupremData, sudhakerData } from '../Data/Pvc'

const PvcPage = () => {
  return (
    <>
    <div className="pageSection">
        {
            sudhakerData.map((item)=>{
                return(
                    <div className='pbody'>
                        <div className="pageImage">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="productModal">
                        <h3>{item.lenght} {item.brand}</h3>
                            {item.productDesc}
                            {item.size}
                            <h5>{item.brand}</h5>
                            {item.price}<br/>
                            {item.color}
                        </div>
                        <div className='btns'>
                            <button className='btn-c'>BUY</button>  OR  <button className='btn-c'>ADD TO CART</button>
                        </div>
                    </div>
                )
            })
            
        }
        {
            SupremData.map((item)=>{
                return(
                    <div className='pbody'>
                        <div className="pageImage">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="productModal">
                        <h3>{item.lenght} {item.brand}</h3>
                            {item.productDesc}
                            {item.size}
                            <h5>{item.brand}</h5>
                            {item.price}<br/>
                            {item.color}
                        </div>
                        <div className='btns'>
                            <button className='btn-c'>BUY</button>  OR  <button className='btn-c'>ADD TO CART</button>
                        </div>
                    </div>
                )
            })
            
        }
        {
            FinolexData.map((item)=>{
                return(
                    <div className='pbody'>
                        <div className="pageImage">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="productModal">
                        <h3>{item.lenght} {item.brand}</h3>
                            {item.productDesc}
                            {item.size}
                            <h5>{item.brand}</h5>
                            {item.price}<br/>
                            {item.color}
                        </div>
                        <div className='btns'>
                            <button className='btn-c'>BUY</button>  OR  <button className='btn-c'>ADD TO CART</button>
                        </div>
                    </div>
                )
            })
            
        }
        {
            AshirwadData.map((item)=>{
                return(
                    <div className='pbody'>
                        <div className="pageImage">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="productModal">
                        <h3>{item.lenght} {item.brand}</h3>
                            {item.productDesc}
                            {item.size}
                            <h5>{item.brand}</h5>
                            {item.price}<br/>
                            {item.color}
                        </div>
                        <div className='btns'>
                            <button className='btn-c'>BUY</button>  OR  <button className='btn-c'>ADD TO CART</button>
                        </div>
                    </div>
                )
            })
            
        }

    </div>
    </>
  )
}

export default PvcPage;