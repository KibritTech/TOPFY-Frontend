import React from "react";
import styles from "./Text.module.css";
function Text(props) {
  return <div className={styles.text + " " + props.font}>{props.children}</div>;
}

export default Text;
