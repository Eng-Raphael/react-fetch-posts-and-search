import './Post.css';

function Post({ title, body }) {
    return (
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{body}</p>
      </div>
    );
  }
  
  export default Post;
  