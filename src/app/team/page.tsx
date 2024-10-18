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


    {/* <!-- Team Section --> */}
    <section className="py-12 bg-black text-center" id="teams">
    <h2 className="mb-10 text-white text-2xl">Meet Our Team</h2>
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {/* <!-- Team Member 1 --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
            <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="Mochi" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
            <h3 className="text-xl font-bold text-gray-800">Mochi</h3>
            <p className="text-gray-600">Role: Leader</p>
            <p className="text-gray-600">Expertise: Business Strategy, Leadership</p>
            <p className="text-gray-600">Email: mochi@lux.com</p>
            <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
        </div>
        {/* <!-- Team Member 2 --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
            <img src="https://randomuser.me/api/portraits/women/74.jpg" alt="Munchy" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
            <h3 className="text-xl font-bold text-gray-800">Munchy</h3>
            <p className="text-gray-600">Role: Head of Financial Division</p>
            <p className="text-gray-600">Expertise: Financial Management, Accounting</p>
            <p className="text-gray-600">Email: munchy@lux.com</p>
            <p className="text-gray-600">Phone: +1 (987) 654-3210</p>
        </div>
        {/* <!-- Team Member 3 --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
            <img src="https://randomuser.me/api/portraits/men/94.jpg" alt="Bertih" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
            <h3 className="text-xl font-bold text-gray-800">Bertih</h3>
            <p className="text-gray-600">Role: Head of Operation Planning</p>
            <p className="text-gray-600">Expertise: Operations, Logistics</p>
            <p className="text-gray-600">Email: bertih@lux.com</p>
            <p className="text-gray-600">Phone: +1 (234) 567-8910</p>
        </div>
        {/* <!-- Team Member 4 --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
            <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="Berda" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
            <h3 className="text-xl font-bold text-gray-800">Berda</h3>
            <p className="text-gray-600">Role: Head of Quality Checking</p>
            <p className="text-gray-600">Expertise: Quality Assurance, Product Inspection</p>
            <p className="text-gray-600">Email: berda@lux.com</p>
            <p className="text-gray-600">Phone: +1 (456) 789-0123</p>
        </div>
        {/* <!-- Team Member 5 --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
            <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="Berih" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
            <h3 className="text-xl font-bold text-gray-800">Berih</h3>
            <p className="text-gray-600">Role: Head of Security</p>
            <p className="text-gray-600">Expertise: Security Management, Risk Assessment</p>
            <p className="text-gray-600">Email: berih@lux.com</p>
            <p className="text-gray-600">Phone: +1 (678) 901-2345</p>
        </div>
        {/* <!-- Team Member 6 --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
            <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Bertam" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
            <h3 className="text-xl font-bold text-gray-800">Bertam</h3>
            <p className="text-gray-600">Role: Head of IT Security</p>
            <p className="text-gray-600">Expertise: Cybersecurity, Data Protection</p>
            <p className="text-gray-600">Email: bertam@lux.com</p>
            <p className="text-gray-600">Phone: +1 (890) 123-4567</p>
        </div>
        {/* <!-- Team Member 7 --> */}
        <div className="bg-white p-5 rounded-lg text-center shadow-lg">
            <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Beikin" loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-4"></img>
            <h3 className="text-xl font-bold text-gray-800">Beikin</h3>
            <p className="text-gray-600">Role: Head of Delivery</p>
            <p className="text-gray-600">Expertise: Delivery Management, Customer Service</p>
            <p className="text-gray-600">Email: beikin@lux.com</p>
            <p className="text-gray-600">Phone: +1 (012) 345-6789</p>
        </div>
    </div>
    </section>

    
    {/* Footer */}
    <footer className="text-center p-5 bg-black text-white">
      <p>&copy; 2024 Lux. All rights reserved.</p>
    </footer>


    </>
  )
}