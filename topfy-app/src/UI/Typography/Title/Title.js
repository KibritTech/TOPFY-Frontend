import React from "react";
import styles from "./Title.module.css";
function Title(props) {
  return (
    <div className={styles.title + " " + props.font}>{props.children}</div>
  );
}

export default Title;
