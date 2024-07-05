import { useMemo } from "react";
export const useSortedPosts = (posts, sort) => {
  const sortedPost = useMemo(() => {
    console.log("Отработала функсия сортировки и вывода");
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPost;
};
export const usePosts = (posts, sort, query) => {
  const sortedPost = useSortedPosts(posts, sort);
  const sortedAndSerchedPosts = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, posts]);
  return sortedAndSerchedPosts;
};
