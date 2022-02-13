import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { PostListPage } from './components/posts/PostListPage';
import { UserListPage } from './components/users/UserListPage';
// import { UserDetailPage } from './components/userDetailPage/UserDetailPage';
import {NavBar} from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
           <NavBar/> 
        </header>
        <Routes>
          <Route path="posts" element={<PostListPage/>} />
          <Route path="users" element={<UserListPage/>} />
        </Routes>
      </div>
      </BrowserRouter>


      );
}

export default App;