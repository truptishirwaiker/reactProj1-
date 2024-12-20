import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'images/1.jpg',
    'images/3.jpg',
    'images/5.jpeg',
    'images/4.jpeg',
    'images/2.jpeg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', height: '60vh', position: 'relative', overflow: 'hidden', marginBottom: '20px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
          height: '100%'
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} style={{ width: '100%', height: '100%', flexShrink: 0 }}>
          <img
           
            src={slide}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          /></div>
        ))}
      </div>
      <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '10px' }}>
        <button style={buttonStyle}>Latest Movies</button>
        <button style={buttonStyle}>Upcoming Movies</button>
        <button style={buttonStyle}>Nearby Events</button>
      </div>
      <div style={{ textAlign: 'center', position: 'absolute', bottom: '20px', width: '100%' }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              padding: '5px',
              margin: '0 5px',
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? '#007BFF' : '#CCCCCC',
              border: 'none',
              cursor: 'pointer',
              width: '10px',
              height: '10px'
            }}
          />
        ))}</div>
      
</div>)}

      



const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #007BFF',
  color: '#007BFF',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default Carousel;
