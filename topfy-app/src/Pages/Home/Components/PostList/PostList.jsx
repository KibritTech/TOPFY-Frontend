import React from "react";
import styles from "./PostList.module.css";
import Post from "../../../../Components/Post/Post";
function PostList() {
  const data = [
    { tag: "sports", title: "football" },
    { tag: "cooking", title: "vegan" },
  ];
  return (
    <div className={styles.PostList}>
      {data.map((el) => {
        return <Post tag={el.tag} title={el.title} />;
      })}
    </div>
  );
}

export default PostList;
