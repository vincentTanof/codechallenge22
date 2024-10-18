import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function HomePage() {

  const store = JSON.parse(cookies().get("cartStore")?.value ?? '[]');
  console.log(store[0].data);
  console.log(store[0].price);

  // NavBar
  return ( 
    <>
    {/* // navbar */}
    <div className="bg-black overflow-hidden sticky top-0 w-full flex justify-between items-center p-3 z-50">
      {/* navbar brand */}
      <div className="text-lg">
        <a href="/" className="text-white hover:text-gray-300">Lux</a>
      </div>
      <a href="/" className="text-white hover:text-gray-300 pr-4">Home</a>
      <a href="/about" className="text-white hover:text-gray-300 pr-4">About Us</a>
      <a href="/product" className="text-white hover:text-gray-300 pr-4">Product & Services</a>
      <a href="/team" className="text-white hover:text-gray-300 pr-4">Teams</a>
    </div>

    {/* Hero */}
    <section className="bg-cover bg-center h-[80vh] flex justify-center items-center text-center relative" style={{ backgroundImage: "url('https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg')" }}>
        <div className="bg-white bg-opacity-80 p-5 md:p-10 rounded-lg">
            <h1><strong>Product & Services</strong></h1>
            <p>Committed to providing the best products and services</p>
            <p></p>
            <a href="/about" className="text-black bg-yellow-500 text-center hover:text-gray-300 pr-2 pl-2">Learn More</a>
        </div>
    </section>

    {/* <!-- Products & Services Section --> */}
    <section className="py-12 text-center bg-black" id="products">
    <h2 className="text-2xl mb-8 text-white">Explore Our Products</h2>
    <div className="pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* <!-- Product 1 --> */}
        <div className="bg-white p-5 rounded-lg shadow-lg text-left">
            <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg" alt="Nordviken Chair" loading="lazy" className="w-full h-40 object-cover mb-4 transition-transform duration-300 hover:scale-105 hover:opacity-90 md:hover:scale-110 lg:hover:scale-120"></img>
            <h3 className="text-xl font-bold mb-2">Nordviken Chair</h3>
            <p className="text-gray-600 mb-2">A high-quality wooden chair with antique stain finish, perfect for any modern home or office.</p>
            <p className="text-xl font-bold text-blue-600 mb-4">$149.99</p>
            <form action={async() => {
            "use server"

            cookies().set("cartStore", JSON.stringify([{data: "Nordviken Chair", price: 199.99}]))
            redirect('/product')
            }}>
            <button className="bg-blue-600 hover:bg-yellow-500 text-white py-2 px-4 rounded transition-all duration-300">Add To Cart</button>
            </form>
        </div>
        {/* <!-- Product 2 --> */}
        <div className="bg-white p-5 rounded-lg shadow-lg text-left">
            <img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/201/1020142_PE831799_S4.jpg" alt="Modern Dining Set" loading="lazy" className="w-full h-40 object-cover mb-4 transition-transform duration-300 hover:scale-105 hover:opacity-90 md:hover:scale-110 lg:hover:scale-120"></img>
            <h3 className="text-xl font-bold mb-2">Modern Dining Set</h3>
            <p className="text-gray-600 mb-2">Stylish and durable dining set for contemporary homes, made from premium materials.</p>
            <p className="text-xl font-bold text-blue-600 mb-4">$499.99</p>
            <form action={async() => {
            "use server"

            
            cookies().set("cartStore", JSON.stringify([{data: "Modern Dining Set", price: 499.99}]))
            redirect('/product')
            }}>
            <button className="bg-blue-600 hover:bg-yellow-500 text-white py-2 px-4 rounded transition-all duration-300">Add To Cart</button>
            </form>
            
        </div>
        {/* <!-- Product 3 --> */}
        <div className="bg-white p-5 rounded-lg shadow-lg text-left">
            <img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/743/1074348_PE856162_S5.jpg" alt="IKEA Kallax Shelf Unit" loading="lazy" className="w-full h-40 object-cover mb-4 transition-transform duration-300 hover:scale-105 hover:opacity-90 md:hover:scale-110 lg:hover:scale-120"></img>
            <h3 className="text-xl font-bold mb-2">IKEA Kallax Shelf Unit</h3>
            <p className="text-gray-600 mb-2">A versatile and sturdy shelving unit, ideal for organizing your living room or office space.</p>
            <p className="text-xl font-bold text-blue-600 mb-4">$199.99</p>
            <form action={async() => {
            "use server"

            cookies().set("cartStore", JSON.stringify([{data: "IKEA Kallax Shelf Unit", price: 199.99}]))
            redirect('/product')
            }}>
            <button className="bg-blue-600 hover:bg-yellow-500 text-white py-2 px-4 rounded transition-all duration-300">Add To Cart</button>
            </form>
            
        </div>
        {/* <!-- Product 4 --> */}
        <div className="bg-white p-5 rounded-lg shadow-lg text-left">
            <img src="https://images-cdn.ubuy.co.id/634f95c6e2151e3eac4d9b83-ikea-table-with-10-drawers-white.jpg" alt="IKEA Table with 10 Drawers" loading="lazy" className="w-full h-40 object-cover mb-4 transition-transform duration-300 hover:scale-105 hover:opacity-90 md:hover:scale-110 lg:hover:scale-120"></img>
            <h3 className="text-xl font-bold mb-2">IKEA Table with 10 Drawers</h3>
            <p className="text-gray-600 mb-2">Spacious and functional table with 10 drawers, perfect for home offices or craft spaces.</p>
            <p className="text-xl font-bold text-blue-600 mb-4">$299.99</p>
            <form action={async() => {
            "use server"

            cookies().set("cartStore", JSON.stringify([{data: "IKEA Table with 10 Drawers", price: 299.99}]))
            redirect('/product')
            }}>
            <button className="bg-blue-600 hover:bg-yellow-500 text-white py-2 px-4 rounded transition-all duration-300">Add To Cart</button>
            </form>
            
        </div>

    </div>
    </section>

    {/* <!-- Cart Section --> */}
    <section className="flex flex-col items-center my-10" id="cart">
    <h2 className="text-2xl mb-5">Your Cart</h2>
    <ul id="cart-items" className="w-full max-w-sm list-none p-0"></ul>
    <h1 className="z-10 text-3xl" id="cart-total-price">{store[0].data}</h1>
    <div className="text-xl font-bold mt-5">Total: $<span id="cart-total-price">{store[0].price}</span></div>
    <form action={async() => {
    "use server"
    // Clear Cart
    cookies().set("cartStore", JSON.stringify([]));

    
    redirect('/product');
    }}>
    <button className="bg-blue-600 hover:bg-yellow-500 text-white py-2 px-4 rounded transition-all duration-300">
        Clear Cart
    </button>
    </form>
    </section>


    
    {/* Footer */}
    <footer className="text-center p-5 bg-black text-white">
      <p>&copy; 2024 Lux. All rights reserved.</p>
    </footer>


    </>
  )
}