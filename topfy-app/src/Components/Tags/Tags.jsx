import React, { useEffect, useState } from "react";
import Tag from "../Tag/Tag";
import styles from "./Tags.module.css";
function Tags(props) {
  //Storing Selected Tags
  let [selectedTags, setSelectedTags] = useState([]);

  //When selecting, we find out if tag is selected or deselected,
  //then update the array
  const onSelectSave = (tag, isSelected) => {
    if (isSelected) {
      setSelectedTags((prev) => [...prev, tag]);
    } else {
      setSelectedTags(selectedTags.filter((el) => el.id != tag.id));
    }
  };

  //Every time we select a tag we update and save local storage.
  useEffect(() => {
    localStorage.setItem("selectedTAGS", JSON.stringify(selectedTags));
  }, [selectedTags]);

  // Tag Sort is a way to align all tags and subtags
  let [tagSortArr, setTagSortArr] = useState([]);

  useEffect(() => {
    setTagSortArr(props.data);
  }, [props.data]);

  //Everytime a tag is selected we rerender the array
  //Find if the tag exists
  //If isExpand true we show reArrange the array and show the subtags
  //Otherwise we remove the related subtags
  const tagArrHandler = (id, isExpand) => {
    const tag = tagSortArr.find((el) => el.id === id);
    if (tag && tag.childrenTags) {
      const index = tagSortArr.findIndex((el) => {
        return el.id === tag.id;
      });
      if (isExpand) {
        tagSortArr.splice(index + 1, 0, ...tag.childrenTags);
        setTagSortArr((prevArr) => [...prevArr]);
      } else {
        const newArr = [];
        tagSortArr.forEach((el) => {
          if (!tag.childrenTags.includes(el)) {
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
            isMain={true}
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
