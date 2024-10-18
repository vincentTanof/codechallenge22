import React, { useState, useEffect } from 'react';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
  
    // Retrieve cart items from localStorage on component mount
    useEffect(() => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const parsedCart: CartItem[] = JSON.parse(storedCart);
        setCartItems(parsedCart);
        calculateTotal(parsedCart);
      }
    }, []);
  
    // Function to calculate total price
    const calculateTotal = (items: CartItem[]) => {
      const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotalPrice(parseFloat(total.toFixed(2)));
    };
  
    // Function to clear the cart
    const clearCart = () => {
      localStorage.removeItem('cart');
      setCartItems([]);
      setTotalPrice(0);
    };
  
    return (
      <section className="flex flex-col items-center my-10">
        <h2 className="text-2xl mb-5">Your Cart</h2>
        <ul id="cart-items" className="w-full max-w-sm list-none p-0">
          {cartItems.length === 0 ? (
            <li className="text-center">Your cart is empty.</li>
          ) : (
            cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-2 border-b border-gray-300">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 mr-4" />
                  <span>{item.name} (x{item.quantity})</span>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))
          )}
        </ul>
        <div className="text-xl font-bold mt-5">Total: ${totalPrice}</div>
        <button
          className="bg-blue-600 hover:bg-yellow-500 text-white py-2 px-4 mt-5 rounded transition-all duration-300"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </section>
    );
  };
  
  export default Cart;
  