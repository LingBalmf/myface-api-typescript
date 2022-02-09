import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { PostListPage } from './components/posts/PostListPage';
import { UserListPage } from './components/users/UserListPage';
import { UserDetailPage } from './components/userDetailPage/UserDetailPage';
import {Navbar} from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="posts" element={<PostListPage/>} />
          <Route path="users" element={<UserListPage/>} />
          <Route path="users/:userId" element={<UserDetailPage />} />
        </Routes>
      </div>
      </BrowserRouter>


      );
}

export default App;