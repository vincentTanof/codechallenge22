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


    {/* About Us */}
    <section className="bg-cover bg-center h-[80vh] flex justify-center items-center text-center relative" style={{ backgroundImage: "url('https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg')" }}>
      <div className="bg-white bg-opacity-80 p-5 md:p-10 rounded-lg">
          <h1>About Us</h1>
      </div>
    </section>

    {/* Company HIstory */}
    <section className="py-12 px-4 bg-black text-center" id="about">
        <h2 className="mb-10 text-white text-2xl">Company History</h2>
        <div className="bg-white p-8 rounded-lg max-w-3xl mx-auto shadow-lg">
            <div className="text-gray-800 text-left">
                <p>Founded in 1975, <strong>Lux</strong> started from humble beginnings as a small garage sale venture. With a passion for quality and an eye for customer preferences, our founders began to notice the growing demand for well-crafted, functional furniture. What started as a simple operation evolved into a business dedicated to fulfilling the unique needs of customers, one piece of furniture at a time. Slowly, through hard work and a commitment to craftsmanship, Lux transitioned from a local business to a well-recognized brand in the furniture industry.</p>

                <p>As the company grew, so did its mission. Lux became more than just a furniture provider; it became a brand that stood for quality, innovation, and customer satisfaction. We learned early on that furniture was not just about function, but about creating spaces that reflected the individuality and lifestyle of our customers. Every product we designed carried with it our promise of durability, style, and comfort, ensuring that we met the expectations of homeowners and businesses alike.</p>

                <p>Today, Lux continues to lead the way in the furniture industry by staying true to its roots while embracing modern trends and technologies. Our commitment to quality and customer service remains as strong as ever, and we continue to innovate, pushing the boundaries of design and functionality. From humble garage sales to a thriving business, Lux’s journey is a testament to the power of vision, hard work, and a deep understanding of what truly matters to our customers: beautiful, reliable furniture that transforms their spaces.</p>
            </div>
        </div>
    </section>

    {/* Mission */}
    <section className="py-12 px-4 bg-black text-center" id="mission">
        <h2 className="mb-10 text-white text-2xl inline-block">Our Mission</h2>
        <div className="bg-white p-8 rounded-lg max-w-3xl mx-auto shadow-lg">
            <div className="text-gray-800 text-left">
                <p>At <strong>Lux</strong>, our mission is simple: to provide excellent services and deliver top-grade quality furniture. We believe that every home should reflect the unique style and personality of its owners. By crafting furniture that combines both beauty and functionality, we aim to bring comfort, innovation, and practicality to every space. Whether it's a small home or a large office, we ensure that every piece is created with the utmost attention to detail and customer needs in mind.</p>
                
                <p>Our team is dedicated to enhancing the lives of our customers by offering furniture that not only looks great but also stands the test of time. We strive to provide value through competitive pricing, high-quality materials, and free delivery services that make your experience with us seamless from start to finish. Lux continues to innovate, pushing the boundaries of design to offer solutions that fit the modern lifestyle. We believe in building lasting relationships with our customers, built on trust, quality, and reliability.</p>
            </div>
        </div>
    </section>

    {/* <!-- Our Culture & Values --> */}
    <section className="py-12 px-4 bg-black text-center" id="culture-values">
        <div className="bg-black p-5 rounded-lg inline-block mb-10 shadow-lg">
          <h2 className="m-0 text-white text-2xl">Our Culture & Values</h2>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 max-w-5xl mx-auto">
            {/* <!-- Culture: Work Environment --> */}
            <div className="bg-white p-5 rounded-lg text-center shadow-lg">
                <h3>Work Environment</h3>
                <p>At Lux, we foster a collaborative and supportive work environment where creativity and innovation thrive. We believe in open communication and ensuring that every team member has the tools and resources they need to succeed.</p>
            </div>
            {/* <!-- Culture: Salary --> */}
            <div className="bg-white p-5 rounded-lg text-center shadow-lg">
                <h3>Salary</h3>
                <p>We offer competitive salaries that reflect the skills and expertise of our team. Lux believes in rewarding hard work, dedication, and performance with opportunities for growth and financial rewards.</p>
            </div>
            {/* <!-- Culture: Working Hours --> */}
            <div className="bg-white p-5 rounded-lg text-center shadow-lg">
                <h3>Working Hours</h3>
                <p>Our working hours are designed to provide a healthy work-life balance. We offer flexible schedules to accommodate the personal needs of our employees while maintaining productivity and focus during work hours.</p>
            </div>
            {/* <!-- Culture: Regulations --> */}
            <div className="bg-white p-5 rounded-lg text-center shadow-lg">
                <h3>Regulations</h3>
                <p>Lux follows industry-standard regulations to ensure a safe and respectful workplace. We adhere to policies that promote equality, inclusion, and fairness, creating a work environment where everyone is valued and respected.</p>
            </div>
            
            {/* <!-- Values: Responsible --> */}
            <div className="bg-white p-5 rounded-lg text-center shadow-lg">
                <h3>Responsible</h3>
                <p>We take responsibility for the quality of our products and our impact on the community.</p>
            </div>
            {/* <!-- Values: Cheap --> */}
            <div className="bg-white p-5 rounded-lg text-center shadow-lg">
                <h3>Cheap</h3>
                <p>We offer competitive pricing without sacrificing quality.</p>
            </div>
            {/* <!-- Values: Sturdy --> */}
            <div className="bg-white p-5 rounded-lg text-center shadow-lg">
                <h3>Sturdy</h3>
                <p>Our furniture is built to last, ensuring durability for everyday use.</p>
            </div>
            {/* <!-- Values: Free Delivery --> */}
            <div className="bg-white p-5 rounded-lg text-center shadow-lg">
                <h3>Free Delivery</h3>
                <p>We offer free delivery services to enhance our customer experience and convenience.</p>
            </div>
        </div>
    </section>

    {/* Team Section */}
    <section className="py-12 bg-black text-center" id="team">
      <h2 className="mb-10 text-white text-2xl">Meet Our Team</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {/* <!-- Mochi --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
          <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="Mochi" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
          <h3 className="text-xl font-bold text-gray-800">Mochi</h3>
          <p className="text-gray-600">Leader</p>
        </div>
        {/* <!-- Munchy --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
          <img src="https://randomuser.me/api/portraits/women/74.jpg" alt="Munchy" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
          <h3 className="text-xl font-bold text-gray-800">Munchy</h3>
          <p className="text-gray-600">Head of Financial Division</p>
        </div>
        {/* <!-- Bertih --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
          <img src="https://randomuser.me/api/portraits/men/94.jpg" alt="Bertih" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
          <h3 className="text-xl font-bold text-gray-800">Bertih</h3>
          <p className="text-gray-600">Head of Operation Planning</p>
        </div>
        {/* <!-- Berda --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
          <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="Berda" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
          <h3 className="text-xl font-bold text-gray-800">Berda</h3>
          <p className="text-gray-600">Head of Quality Checking</p>
        </div>
        {/* <!-- Berih --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
          <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="Berih" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
          <h3 className="text-xl font-bold text-gray-800">Berih</h3>
          <p className="text-gray-600">Head of Security</p>
        </div>
        {/* <!-- Bertam --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
          <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Bertam" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
          <h3 className="text-xl font-bold text-gray-800">Bertam</h3>
          <p className="text-gray-600">Head of IT Security</p>
        </div>
        {/* <!-- Beikin --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
          <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Beikin" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
          <h3 className="text-xl font-bold text-gray-800">Beikin</h3>
          <p className="text-gray-600">Head of Delivery</p>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-12 bg-black text-center" id="testimonials">
      <h2 className="text-white text-2xl mb-8">What Our Customers Say</h2>
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-xl mx-auto mb-8">
        <blockquote className="italic text-gray-800">
          <p>"Lux transformed my home. The furniture is not only stylish but also incredibly durable. Plus, the free delivery service was a huge bonus!"</p>
          <cite className="block mt-4 text-right font-bold text-gray-600">– Sarah L.</cite>
        </blockquote>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-xl mx-auto">
        <blockquote className="italic text-gray-800">
          <p>"I’ve been a customer of Lux for over 10 years. Their commitment to quality and affordable prices keeps me coming back!"</p>
          <cite className="block mt-4 text-right font-bold text-gray-600">– John D.</cite>
        </blockquote>
      </div>
    </section>

    
    {/* Footer */}
    <footer className="text-center p-5 bg-black text-white">
      <p>&copy; 2024 Lux. All rights reserved.</p>
    </footer>


    </>
  )
}