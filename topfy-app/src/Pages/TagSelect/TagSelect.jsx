import React, { useState } from "react";
import Text from "../../UI/Typography/Text/Text";
import Container from "../../UI/Utility/Container/Container";
import Tags from "../../Components/Tags/Tags";
import imgSRC from "../../img/Saly-31.png";
import Image from "../../UI/Utility/Image/Image";
import Button from "../../Components/Button/Button";

function TagSelect() {
  //Dummy Data
  const [tags, setTags] = useState([
    {
      id: 1,
      name: "sports",
    },
    {
      id: 2,
      name: "cooking",
    },
    {
      id: 3,
      name: "cars",
      subtags: [
        {
          id: 9,
          name: "mercedes",
        },
        {
          id: 10,
          name: "bmw",
        },
        {
          id: 11,
          name: "mazda",
        },
        {
          id: 12,
          name: "dodge",
        },
        {
          id: 13,
          name: "ford",
        },
      ],
    },
    {
      id: 4,
      name: "travelling",
    },
    {
      id: 5,
      name: "gaming",
    },
    {
      id: 6,
      name: "programming",
    },
    {
      id: 7,
      name: "marketing",
    },
    {
      id: 8,
      name: "fishing",
    },
  ]);
  return (
    <Container>
      <div className="vh-100 bg-lightcreamy p-20 d-flex  justify-content-center align-items-center flex-column pos-rel">
        <Text classes="font-montserrat pos-abs top-center w-100 text-center">
          Let us know what you like
        </Text>
        <Image source={imgSRC} classes="mw-400" />
        <Tags data={tags} />
        <Button classes="mt-20">Done</Button>
      </div>
    </Container>
  );
}

export default TagSelect;
