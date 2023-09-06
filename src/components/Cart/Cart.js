import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item !!!</p>
    }
    else{
        message = <p>Thanks for Buy</p>
    }

    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : 'blue'}>Order Summery</h3>
            <h5 className={`bold ${cart.length === 3 ? 'yellow' : 'blue'}`}>Order Quantity:{cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=> handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>first gift</p> : <p> no this is not the first</p>}
            <p>AND Operator</p>
            {cart.length === 2 && <h2>Double item</h2>}
            <p>Or Operator</p>
            {
                cart.length === 4 || <h4>This is not Four Item</h4>
            }
        </div>
    );
};

export default Cart; 

/* 
Conditional Rendering
1. use element in a variable and  then if-else to set value
2. ternary operation condition ? true : false
3. &&(and) operator {if condition is true i want to display something }
4. ||(or)  Operator {if condition is false then it will show something }

*/