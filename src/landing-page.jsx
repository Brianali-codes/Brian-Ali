import React, { useEffect, useState } from 'react';

export default function LandingPage() {
  const [showNavbar, setShowNavbar] = useState(true); // Track visibility of navbar

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Scrolling down
      if (currentScroll > lastScrollTop) {
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-row justify-center items-center bg-white dark:bg-black" id="NB">
      <ul
        className="nav bg-white dark:bg-black"
        style={{
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)', // Move navbar based on scroll
          opacity: showNavbar ? 1 : 0, // Adjust visibility
          transition: 'transform 0.3s ease, opacity 0.3s ease', // Smooth transition
          position: 'fixed',
          top: 0,
          zIndex: 999,
        }}
      >
        <a href="#HOME"><p className='text-black dark:text-white dark:hover:text-white'>Home</p></a>
        <a href="#ABOUT"><p className='text-black dark:text-white dark:hover:text-white'>About</p></a>
        <a href="#PROJECTS"><p className='text-black dark:text-white dark:hover:text-white'>Projects</p></a>
        <a href="#Services"><p className='text-black dark:text-white dark:hover:text-white'>Contacts</p></a>
      </ul>
    </div>
  );
}
