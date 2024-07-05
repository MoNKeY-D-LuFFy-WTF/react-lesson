import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { poiveteRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context";
function AppRouter() {
  const { isAouth } = useContext(AuthContext);

  return (
    <Routes>
      {isAouth
        ? poiveteRoutes.map((route) => (
            <Route
              key={route.path}
              element={route.component}
              path={route.path}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              element={route.component}
              path={route.path}
            />
          ))}
    </Routes>
  );
}

export default AppRouter;
