import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from 'prop-types';
import 'react-modern-drawer/dist/index.css';

PathBar.propTypes = {
  handleToggleDrawer: PropTypes.func.isRequired,
};

function PathBar({ handleToggleDrawer }) {
  // just some scrolling things to make the pathbar float
  const [isFloating, setIsFloating] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 100
      setIsFloating(scrollPosition > scrollThreshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
      <div className={`w-full h-[55px] bg-custom-grey-lighter drop-shadow-xl z-10 flex items-center ${
            isFloating ? 'fixed top-0 left-0 right-0' : ''
          } `}>
        <div className='pl-8 flex flex-row items-center'>
          <button><GiHamburgerMenu className='w-[30px] h-[30px] ' onClick={handleToggleDrawer}/></button>
          <button className="pl-8 text-xl font-medium text-custom-grey-bold "> {"> Bookshelf"} </button>
        </div>
      </div>
    </>
    
  )
}

export default PathBar;
