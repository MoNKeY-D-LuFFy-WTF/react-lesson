import About from "../pages/About";
import Posts from "../pages/Posts";
import PostedPage from "../pages/PostedPage";
import Login from "../pages/Login";
export const poiveteRoutes = [
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/posts",
    component: <Posts />,
  },
  {
    path: "/posts/:id",
    component: <PostedPage />,
  },
];
export const publicRoutes = [
  {
    path: "/login",
    component: <Login />,
  },
];
