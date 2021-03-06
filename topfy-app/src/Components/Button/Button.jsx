import React from "react";
import styles from "./Button.module.css";
function Button(props) {
  return (
    <div className={styles.defaultButton + " " + props.classes}>
      {props.children}
    </div>
  );
}

export default Button;
