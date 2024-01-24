import { useState, useEffect } from 'react';
import { IoArrowUp } from "react-icons/io5";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add event listener to check scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show the scroll-up button when scrolled down a certain amount
      if (scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <>
      {isVisible && (
        <div className="flex items-center justify-center fixed bottom-0 bg-gradient-to-t from-yellow-300 to-transparent w-full pt-8 bg-opacity-50">
          <IoArrowUp className="text-xl cursor-pointer" onClick={scrollToTop}/>
          <p className='font-black hover:underline hover:text-lg cursor-pointer m-5' onClick={scrollToTop}>Back to Top</p>
          <IoArrowUp className="text-xl cursor-pointer" onClick={scrollToTop}/>
        </div>
      )}
    </>
  );
};

export default ScrollUp;