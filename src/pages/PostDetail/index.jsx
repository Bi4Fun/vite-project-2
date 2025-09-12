import { useParams } from "react-router";
import { useState, useEffect } from "react";

function PostDetail() {
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((post) => setPost(post))
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
export default PostDetail;
