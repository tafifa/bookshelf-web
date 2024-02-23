import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './styles/App.css';

// pages
import Home from './pages/home';
import Collection from './pages/collection';
import Add from "./pages/collection/add";
import Edit from "./pages/collection/edit";
import View from './pages/collection/view';
import Profile from './pages/profile';

export default function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="collection" element={<Collection/>} />
          <Route path="collection/add" element={<Add/>} />
          <Route path="collection/edit" element={<Edit/>} />
          <Route path="collection/view/:bookId" element={<View/>} />
          <Route path="profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
  )
}
