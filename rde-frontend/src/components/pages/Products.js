import React from 'react'
import Card from '../misc/Card'
import shoe1 from '../../assets/imgs/img.png'
import shoe2 from '../../assets/imgs/img2.png'
import './Products.css'

function Products() {
    return (
        <div className='product-page'>
            <div className='product-menu'>
                <div className='product-menu-card'>
                    
                </div>
            </div>
            <div className='product-list'>
                <div className='product-container'>
                    <Card imgUrl={shoe1}/>
                    <Card imgUrl={shoe2}/>
                    <Card imgUrl={shoe1}/>
                </div>
            </div>
        </div>
    )
}

export default Products
