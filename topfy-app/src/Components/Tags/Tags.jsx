import React, { useEffect, useState } from "react";
import Tag from "../Tag/Tag";
import styles from "./Tags.module.css";
function Tags(props) {
  //Storing Selected Tags
  let [selectedTags, setSelectedTags] = useState([]);
  const onSelectSave = (tag, isSelected) => {
    if (isSelected) {
      setSelectedTags((prev) => [...prev, tag]);
    } else {
      setSelectedTags(selectedTags.filter((el) => el.id != tag.id));
    }
  };
  useEffect(() => {
    localStorage.setItem("selectedTAGS", JSON.stringify(selectedTags));
  }, [selectedTags]);
  // Tag Sort is a way to align all tags and subtags
  let [tagSortArr, setTagSortArr] = useState(props.data);

  //Everytime a tag is selected we rerender the array
  //Find if the tag exists
  //If isExpand true we show reArrange the array and show the subtags
  //Otherwise we remove the related subtags
  const tagArrHandler = (id, isExpand) => {
    const tag = tagSortArr.find((el) => el.id === id);
    if (tag && tag.subtags) {
      const index = tagSortArr.findIndex((el) => {
        return el.id === tag.id;
      });
      if (isExpand) {
        tagSortArr.splice(index + 1, 0, ...tag.subtags);
        setTagSortArr((prevArr) => [...prevArr]);
      } else {
        const newArr = [];
        tagSortArr.forEach((el) => {
          if (!tag.subtags.includes(el)) {
            newArr.push(el);
          }
        });
        setTagSortArr(newArr);
      }
    }
  };

  return (
    <div className={styles.tagWrapper}>
      {tagSortArr.map((el) => {
        return (
          <Tag
            onSelectSave={(tag, isSelected) => {
              onSelectSave(tag, isSelected);
            }}
            onTagSelect={(id, isCollapse) => {
              tagArrHandler(id, isCollapse);
            }}
            key={el.id}
            id={el.id}
            name={el.name}
          />
        );
      })}
    </div>
  );
}

export default Tags;
