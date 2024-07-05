import React from "react";
import cl from "./MyModal.module.css";
function MyModal({ children, visable, setVisable }) {
  const rootClasses = [cl.MyModal];
  if (visable) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisable(false)}>
      <div onClick={(e) => e.stopPropagation()} className={cl.MyModalContent}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
