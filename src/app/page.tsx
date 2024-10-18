import React from 'react';

export default function HomePage() {

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
            <h1><strong>Welcome to Our Company</strong></h1>
            <p>Committed to providing the best products and services</p>
            <p></p>
            <a href="/about" className="text-black bg-yellow-500 text-center hover:text-gray-300 pr-2 pl-2">Learn More</a>
        </div>
    </section>
    
    {/* Footer */}
    <footer className="text-center p-5 bg-black text-white">
      <p>&copy; 2024 Lux. All rights reserved.</p>
    </footer>


    </>
  )
}