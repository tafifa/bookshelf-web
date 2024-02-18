import { useState } from 'react';

import Header from './components/header/header';
import PathBar from './components/utils/Pathbar';
import SideBar from './components/utils/Sidebar';
import MainPage from './components/main/mainPage';
import Footer from './components/footer/footer';

import './styles/App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <Header />
      <PathBar  />
      <SideBar open={isOpen} onClose={handleToggleDrawer} />
      <MainPage/>
      <Footer />
    </>
  )
}
