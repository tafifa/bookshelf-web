import PropTypes from 'prop-types';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleToggleDrawer: PropTypes.func.isRequired,
};

function SideBar({ isOpen, handleToggleDrawer }) {
  return (
    <>
      <Drawer open={isOpen} onClose={handleToggleDrawer} direction='left' size={247} >
        <div className='bg-custom-yellow w-full h-full flex flex-col items-center'>
          <div className='w-[180px] h-[186px] flex flex-col items-center mt-16 mb-6 justify-between '>
            <h4 className='' >Welcome, <span className='font-semibold'> Anonymous!</span></h4>
            <div className='bg-custom-grey-light w-[150px] h-[150px] rounded-full '></div>
          </div>
          <hr className='w-[118px] border-none h-[1px] bg-black mb-6' />
          <div className='w-[78px] h-[73px] flex flex-col justify-between mb-auto '>
            <h4 className=' font-semibold' >Home</h4>
            <h4 className=' font-semibold'> <u>Bookshelf</u> </h4>
          </div>
          <h4 className='text-end mb-3'>Logout</h4>
        </div>
      </Drawer>
    </>
    
  )
}

export default SideBar;
