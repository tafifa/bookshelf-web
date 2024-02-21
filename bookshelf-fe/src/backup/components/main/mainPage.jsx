import { Route, Routes } from 'react-router-dom';

import Home from './home/home';
import Bookshelf from './bookshelf/bookshelf';
import Profile from './profile/profile';
import AddPage from './bookshelf/addpage/addPage';
import EditPage from './bookshelf/editpage/editPage';
import ViewBook from './bookshelf/listbook/viewBook';

export default function MainPage() {
  return (
    <main className="bg-white min-h-screen " >
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/bookshelf" Component={Bookshelf} />
        <Route path="/bookshelf/addPage" Component={AddPage} />
        <Route path="/bookshelf/editPage" Component={EditPage} />
        <Route path="/bookshelf/viewBook" Component={ViewBook} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </main>
  )
}
