// src/components/BurgerStack/BurgerStack.jsx
import {useState} from 'react'
const BurgerStack = (props) => {
    const [ingredient, setIngredient] = useState([])

    const handleDeleteIngredientStack = (ingredient)=>{
        props.deleteStack(ingredient)
    }
 return(
    <>
    <ul>
        {props.stacks.map((stack,index)=>(
            <li style={{backgroundColor:stack.color}} key={index}>{stack.name} <button onClick={()=> handleDeleteIngredientStack(stack)}>-</button></li>
        ))}
    </ul>
    </>
 )
};

export default BurgerStack;
