import './App.css';
import Post from '../src/components/posts/Post';
import Search from '../src/components/search/Search';
import { useEffect , useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-header">Posts</h1>
      <Search posts={posts} setFilteredPosts={setFilteredPosts} />
      <div className="post-container">
        {filteredPosts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
