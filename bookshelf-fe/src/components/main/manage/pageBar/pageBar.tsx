import React, { useEffect } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { GiHamburgerMenu } from "react-icons/gi";

function PageBar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isFloating, setIsFloating] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  // just some scrolling things to make the pathbar float
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
        <button><GiHamburgerMenu className='w-[30px] h-[30px] ' onClick={toggleDrawer}/></button>
      <button className="pl-8 text-xl font-medium text-custom-grey-bold "> {"> Bookshelf"} </button>
      </div>
      
    </div>
    
    <Drawer open={isOpen} onClose={toggleDrawer} direction='left' size={247} >
      <div className='bg-custom-yellow w-full h-full flex flex-col items-center'>
        <div className='w-[180px] h-[186px] flex flex-col items-center mt-16 mb-6 justify-between '>
          <div className='' >Welcome, <span className='font-semibold'> Anonymous!</span></div>
          <div className='bg-custom-grey-light w-[150px] h-[150px] rounded-full '></div>
        </div>
        <hr className='w-[118px] border-none h-[1px] bg-black mb-6' />
        <div className='w-[78px] h-[73px] flex flex-col justify-between mb-auto '>
          <div className='text-base font-semibold' >Home</div>
          <div className=' font-semibold'> <u>Bookshelf</u> </div>
        </div>
        <div className='text-end mb-3'>Logout</div>
      </div>
    </Drawer>
    </>
    
  )
}

export default PageBar;
