import React from 'react'

import './Card.css'

function Card({imgUrl}) {
    return (
            <div class="card">
                <img src={imgUrl} className='card__img' />
                
                     <div class="card__data">
                         <h1 class="card__title">Nike Air Jordan</h1>
                         <span class="card__preci">$99</span>
                         <p class="card__description">Nike Air Jordan Footwear basketball sneakers.</p>
                         <a href="#" class="card__button">Buy Now</a>
                     </div>            
        </div>
    )
}

export default Card
