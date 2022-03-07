import React from 'react';
import './Recipietile.css';

export default function RecipieTile({recipe})
 {
  const [items]=recipe["recipe"]["ingredientLines"]
  function ingredient()
  {
  
  alert(items)
    
  }
  return (
    <div className="recipieTile">
           <img  className="recipeTile__img"
           src={recipe["recipe"]["image"]} onClick={ingredient}></img>
           
           <p className='recipieTile__p'>{recipe["recipe"]["label"]}</p>
    </div>
  )
}

