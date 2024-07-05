import React from "react";
import { getPagesArray } from "../../../utils/pages";
import MyButton from "../button/MyButton";
function Pagination({ totalPages, page, changePage }) {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {" "}
      {pagesArray.map((p) => (
        <span className={page === p ? "page page__current" : "page"} key={p}>
          <MyButton onClick={() => changePage(p)}>{p}</MyButton>
        </span>
      ))}
    </div>
  );
}

export default Pagination;
