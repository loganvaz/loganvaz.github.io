import React from 'react'
import {Link} from 'react-router-dom';
function CardItem({the_src: the_src, label: label, path: path, text: text, clk : clk, card_style: card_style, disable_click}) {

  const click_style = disable_click ? {cursor: 'not-allowed'} : {}

  return (
    
      <li className= "cards__item" onClick={clk} style = {card_style}>
          <Link className = "cards__item__link" to = {path} style = {click_style}>
              <figure className = "cards__item__pic-wrap" data-category = {label} style = {click_style}>
                  <img src={the_src} alt = "NOT FOUND" className = "card_item" ></img>
              </figure>
              <div className = "cards__item__info">
                  <h5 className = "cards__item__text">{text}</h5>
              </div>
          </Link>
      </li>

 
  )
}

CardItem.defaultProps = {
    card_style: {
        backgroundColor: 'lightgrey',
        opacity:'.7',
        disable_click: false
        }

}

export default CardItem
