import React from "react";
import MyButton from "./UI/button/MyButton";
import { Link, useNavigate } from "react-router-dom";
export default function PostItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <Link to={`/posts/${props.post.id}`}>Открыть</Link>
        <MyButton
          onClick={() => {
            props.remove(props.post);
          }}
        >
          Удалить
        </MyButton>
      </div>
    </div>
  );
}
