import React, { useEffect, useState } from "react";
import Header from "../../Components/Layout/Header/Header";
import TagBar from "../../Components/TagBar/TagBar";
import PostList from "./Components/PostList/PostList";
function Home() {
  let [apiFilteredTags, setApiFilteredTags] = useState(
    JSON.parse(localStorage.getItem("selectedTAGS"))
  );

  //Handling the selected tags from TAGBAR
  //Upon receiving tags, we render posts accordingly
  const onSelectHandler = () => {
    const filterTags = JSON.parse(localStorage.getItem("filterTags"));
    if (filterTags.length == 0) {
      setApiFilteredTags(JSON.parse(localStorage.getItem("selectedTAGS")));
    } else {
      setApiFilteredTags(filterTags);
    }
  };

  return (
    <div className="bg-lightcreamy">
      <Header />
      <TagBar postFilter={onSelectHandler} />
      <PostList filteredJSON={apiFilteredTags} />
    </div>
  );
}

export default Home;
