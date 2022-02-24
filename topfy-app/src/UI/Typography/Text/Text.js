import React from "react";
import styles from "./Text.module.css";
function Text({ children }) {
  return <div className={styles.text}>{children}</div>;
}

export default Text;
