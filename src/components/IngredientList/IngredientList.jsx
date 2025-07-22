// src/components/IngredientList/IngredientList.jsx
import {useState} from 'react'
const IngredientList = (props) => {
    const [ingredient, setIngredient] = useState([])
    const handleAddIngredientStack = (ingredient)=>{
        setIngredient(ingredient)
        props.addStack(ingredient)
    }
  return <ul>{props.availableIngredients.map((ingredient, index)=>(
     <li style={{backgroundColor:ingredient.color}} key={index}>{ingredient.name} <button onClick={()=> handleAddIngredientStack(ingredient)}>+</button></li>
  ))}</ul>;
};

export default IngredientList;
