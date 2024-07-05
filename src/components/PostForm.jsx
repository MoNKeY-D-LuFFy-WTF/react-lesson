import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ body: "", title: "" });
    e.preventDefault();
  };
  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type="text"
        placeholder="Называние поста"
      />

      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}

export default PostForm;
