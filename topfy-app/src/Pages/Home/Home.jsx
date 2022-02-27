import React from "react";
import Title from "../../UI/Typography/Title/Title";
import Text from "../../UI/Typography/Text/Text";
import Header from "../../Components/Layout/Header/Header";
import TagBar from "../../Components/TagBar/TagBar";
import PostList from "./Components/PostList/PostList";
function Home() {
  return (
    <div>
      <Header />
      <TagBar />
      <PostList />
    </div>
  );
}

export default Home;
