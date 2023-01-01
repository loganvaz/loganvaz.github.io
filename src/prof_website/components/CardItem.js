import React from 'react'
import {Link} from 'react-router-dom';
function CardItem({the_src: the_src, label: label, path: path, text: text}) {
  return (
    
      <li className= "cards__item">
          <Link className = "cards__item__link" to = {path} style = {{border: "1.5px solid blue"}}>
              <figure className = "cards__item__pic-wrap" data-category = {label}>
                  <img src={the_src} alt = "NOT FOUND" className = "card_item" ></img>
              </figure>
              <div className = "cards__item__info">
                  <h5 className = "cards__item__text">{text}</h5>
              </div>
          </Link>
      </li>

 
  )
}

export default CardItem
