import React from "react";
import styles from "./TagBar.module.css";
function TagBar() {
  const selectedTags = JSON.parse(localStorage.getItem("selectedTAGS"));
  return <div className={styles.tagBar}></div>;
}

export default TagBar;
