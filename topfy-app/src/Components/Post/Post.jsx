import React from "react";
import Text from "../../UI/Typography/Text/Text";
import styles from "./Post.module.css";
function Post(props) {
  return (
    <article className={styles.Post}>
      <div className={styles.Profile}>
        <div className={styles.ProfileImage}>
          <img
            src={"http://vahiddev-001-site1.htempurl.com/img/" + props.userImg}
            alt=""
          />
        </div>
        <div className={styles.ProfileName}>
          <Text classes="font-montserrat  ">{props.username}</Text>
        </div>
      </div>
      <div className={styles.Post__tag}>
        <p> {props.mainTag}</p>
        <div className="d-flex">
          {" "}
          {props.tag.map((el) => {
            return <p key={el.id}>{el.name}</p>;
          })}
        </div>
      </div>
      <div className={styles.Post__image}>
        <img
          src={"http://vahiddev-001-site1.htempurl.com/img/" + props.img}
          alt="Article Image"
        />
      </div>
      <div className={styles.Post__title}>{props.title}</div>
      <div className={styles.Post__description}>{props.desc}</div>
    </article>
  );
}

export default Post;
