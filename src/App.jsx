import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [posts, setPosts] = useState([]); // post dizisini tutan state
  const [selectedPostId, setSelectedPostId] = useState(null); // seçilen postun id değerini tutmak için
  const [loading, setLoading] = useState(true); // Loading state

  // postları çektiğimiz useEffect
  useEffect(() => {
    async function getPosts() {
      const data = await fetch('https://dummyjson.com/posts').then(res => res.json());
      setPosts(data.posts); // postların duracağı state'e postlarımızı gönderiyoruz
      setLoading(false);
    }

    getPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div className="container">
        {selectedPostId ? ( // Eğer herhangi bir posta tıklandıysa
          <CommentDetails // detay sayfası açılsın
            postId={selectedPostId}
            setSelectedPostId={setSelectedPostId}
          />) :
          (
            <Posts // eğer hiçbir posta tıklanmadıysa ana sayfa yani post list gösterilsin
              posts={posts}
              setSelectedPostId={setSelectedPostId} />
          )}
      </div>
    </>
  );
}

// postların gösterildiği component
function Posts({ posts, setSelectedPostId }) {

  // Posta tıklandığında seçilen postun detaylarını göstermek için
  function showDetails(postId) {
    setSelectedPostId(postId); // seçili olan postu tutan state'e postId yani post.id gönderiyoruz
  }
  return (
    <>
      <h2>Post List</h2>
      <div className="post-list">
        <ul>
          {posts.map(post => (
            <li onClick={() => showDetails(post.id)} key={post.id}>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// detay sayfasının gösterildiği component
function CommentDetails({ postId, setSelectedPostId }) {
  const [details, setDetails] = useState(null); // postların detaylarını tutan state
  const [showComments, setShowComments] = useState([]); // postların yorumlarını tutan state

  // önce post detayını daha sonra yorumları çektiğim useEffect
  useEffect(() => {
    async function getCommentDetails() {
      const postDetail = await fetch(`https://dummyjson.com/posts/${postId}`).then(res => res.json());
      setDetails(postDetail);

      const comments = await fetch(`https://dummyjson.com/posts/${postId}/comments`).then(res => res.json());
      setShowComments(comments.comments);
    }

    getCommentDetails();
  }, [postId]); // postId değiştiğinde yeniden çalışır

  // eğer detay sayfası daha yüklenmediyse
  if (!details) {
    return <div className="loading">Loading...</div>;
  }

  // detay sayfasından ana sayfaya dönebilmek için
  function goHomePage() {
    setSelectedPostId(null);
  }

  return (
    <>
      <div className="post-details">
        <h2>{details.title}</h2>
        <p>{details.body}</p>
        <div className="tags">
          {details.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
        <h5>Likes 👍🏻{details.reactions.likes}</h5>
        <h5>Dislikes 👎🏻{details.reactions.dislikes}</h5>
      </div>
      <div className="post-comments">
        <ul>
          {showComments.map(comment => (
            <li key={comment.id}>
              <h4>{comment.user.username} - {comment.user.fullName}</h4>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="backBtn">
        <button onClick={goHomePage}>Back to Home</button>
      </div>
    </>
  );
}