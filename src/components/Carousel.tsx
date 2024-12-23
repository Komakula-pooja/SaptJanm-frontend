

import { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734948349/a9720ae02302e88a923fd1a7e915e5f3_e3zgqh.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734949570/ai-generated-celebrating-parenthood-happy-indian-couple-embracing-at-home-photo_sr52f7.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734949570/ai-generated-diwali-happiness-traditional-embrace-of-an-indian-couple-in-ethnic-clothing-photo_fhmduv.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734949570/young-asian-and-indian-couple-enjoy-having-relaxing-time-in-the-rain-together-in-the-public-park-while-sitting-together-on-the-bench-during-weekend-free-photo_wn5vcp.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734950409/happy-smiling-young-couple-having-dinner-while-talking-eachother-during-candle-light-dinner_ndq9wr.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="carousel" className="relative w-full">
      <div className="relative h-64 sm:h-96 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 duration-700 ease-in-out transform ${
              index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
