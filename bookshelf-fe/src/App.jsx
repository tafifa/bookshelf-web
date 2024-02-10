import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/main/mainPage';
import PageBar from './components/main/manage/pageBar/pageBar';
import AddPage from './components/main/addpage/addPage';
import { Route, Routes } from 'react-router-dom'
import './App.css';

export default function App() {
  

  return (
    <>
      <Header />
      <PageBar />
      <Routes>
            <Route path="/add" Component={AddPage} />
            <Route path="/" Component={MainPage} />
            
      </Routes>
      <Footer />
    </>
  )
}
