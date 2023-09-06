import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirts from '../TShirts/TShirts';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('tshirt already added')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('successfully added')
        }

    }

    const handleRemoveItem = tshirt =>{
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirts
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirts>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;