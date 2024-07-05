import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/Loader/Loader";
function PostedPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  useEffect(() => {
    getById();
  }, [params.id]);
  const getById = async () => {
    const [post, comments] = await PostService.getById(params.id, true);
    setPost(post.data);
    setComments(comments.data);
  };

  return (
    <div>
      {post ? (
        <div style={{ padding: "15px 0" }}>
          <h2>
            {params.id} {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <Loader />
      )}
      <h1>Коментарии </h1>
      <ul style={{ padding: "30px", background: "teal", color: "#fff" }}>
        {comments &&
          comments.map((comment) => (
            <li style={{ marginBottom: "10px" }} key={comment.id}>
              <span>Тема {comment.name}</span> <br />
              <span>Описание {comment.body}</span> <br />
              <span>e-mail {comment.email}</span> <br />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PostedPage;
