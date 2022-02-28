import React, { useEffect, useState } from "react";
import styles from "./PostList.module.css";
import Post from "../../../../Components/Post/Post";
import axios from "axios";
function PostList(props) {
  let [posts, setPosts] = useState([]);
  let config;
  useEffect(async () => {
    config = {
      method: "post",
      url: "http://vahiddev-001-site1.htempurl.com/api/Posts?count=15",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        currentPage: 1,
        tags: JSON.stringify(props.filteredJSON),
      },
    };
    await axios(config).then((response) => {
      const receivedData = [...response.data.posts];
      setPosts([...receivedData]);
    });
  }, [props.filteredJSON]);

  return (
    <div className={styles.PostList}>
      {posts.map((el) => {
        return (
          <Post
            key={el.id}
            mainTag={el.mainTagName}
            tag={el.specificTags}
            title={el.title}
            img={el.mainImage}
            desc={el.description}
            userImg={el.user.image}
            username={el.user.userName}
          />
        );
      })}
    </div>
  );
}

export default PostList;
