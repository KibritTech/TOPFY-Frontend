import React, { useState } from "react";
import Header from "../../Components/Layout/Header/Header";
import TagBar from "../../Components/TagBar/TagBar";
import PostList from "./Components/PostList/PostList";
function Home() {
  let [filterPosts, setFilterPosts] = useState(false);
  //Handling the selected tags from TAGBAR
  //Upon receiving tags, we render posts accordingly
  const onSelectHandler = () => {
    const filterTags = JSON.parse(localStorage.getItem("filterTags"));
    if (filterTags.length > 0) {
      setFilterPosts(true);
    } else {
      setFilterPosts(false);
    }
  };
  return (
    <div className="bg-lightcreamy">
      <Header />
      <TagBar postFilter={onSelectHandler} />
      <PostList isFiltered={filterPosts} />
    </div>
  );
}

export default Home;
