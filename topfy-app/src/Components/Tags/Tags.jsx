import React from "react";
import Tag from "../Tag/Tag";
import styles from "./Tags.module.css";
function Tags(props) {
  return (
    <div className={styles.tagWrapper}>
      {props.data.map((tag) => {
        if (!tag.subtags) {
          return (
            <Tag key={tag.id} subTags={tag.subtags}>
              {tag.name}
            </Tag>
          );
        }
        return <Tags data={tag.subtags} />;
      })}
    </div>
  );
}

export default Tags;
