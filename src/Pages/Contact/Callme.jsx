import React from 'react';
import './Calmme.css';
const CallMeButton = () => {
  const phoneNumber = "+8801709004842"; // Replace with your phone number

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button onClick={handleClick} className=" md:hidden vibrate"><img className='w-32 h-22' src="https://i.ibb.co/k0H44qP/Pngtree-call-me-poster-6694797.png" alt="Pngtree-call-me-poster-6694797" border="0"/>
    </button>
  );
};

export default CallMeButton;
