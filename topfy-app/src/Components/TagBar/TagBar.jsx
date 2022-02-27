import React from "react";
import styles from "./TagBar.module.css";
import Tag from "../Tag/Tag";
function TagBar() {
  const selectedTags = JSON.parse(localStorage.getItem("selectedTAGS"));
  return (
    <div className={styles.tagBar}>
      {selectedTags.map((el) => {
        return <Tag isMain={false} key={el.id} id={el.id} name={el.name} />;
      })}
    </div>
  );
}

export default TagBar;
