import './App.css';
import { PostListPage } from './components/posts/PostListPage';
import { TestPostPage } from './components/posts/TestPostPage';
import { Post } from './components/posts/Post';

function App() {
  return (
    <div className="App">
      <PostListPage />
    </div>
  );
}

export default App;