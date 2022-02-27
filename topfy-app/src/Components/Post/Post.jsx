import React from "react";
import styles from "./Post.module.css";
function Post(props) {
  return (
    <article className={styles.Post}>
      <div className={styles.Post__tag}>{props.tag}</div>
      <div className={styles.Post__image}>
        <img src={props.img} alt="Article Image" />
      </div>
      <div className={styles.Post__title}>{props.title}</div>
      <div className={styles.Post__description}>{props.desc}</div>
    </article>
  );
}

export default Post;
