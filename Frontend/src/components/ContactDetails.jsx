import React, { useState } from 'react';

function ContactDetails() {
  // Define state for owner details
  const [ownerDetails, setOwnerDetails] = useState({
    name: 'Saahil Sharma',
    email: 'saahil@example.com',
    phone: '+1234567890',
    address: 'Hyderabad, India',
  });

  return (
    <>
      {/* Assuming Navbar, Footer components are defined elsewhere */}
      {/* <Navbar Contact /> */}
      <div className="container mx-auto mt-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <p className="text-lg">Name: {ownerDetails.name}</p>
          <p className="text-lg">Email: {ownerDetails.email}</p>
          <p className="text-lg">Phone: {ownerDetails.phone}</p>
          <p className="text-lg">Address: {ownerDetails.address}</p>
        </div>        
      </div>
        {/* <Footer /> */}
      </>
      );
}

export default ContactDetails;
