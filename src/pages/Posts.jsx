import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModay/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../components/hooks/usePosts";
import axios from "axios";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostesLoading, setIsPostesLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchPost(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  async function fetchPost(limit, page) {
    setIsPostesLoading(true);
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
    setIsPostesLoading(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePage = (page) => {
    setPage(page);
    fetchPost(limit, page);
  };
  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal setVisable={setModal} visable={modal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostesLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          {" "}
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSerchedPosts}
          title="Пост про js"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}
export default Posts;
