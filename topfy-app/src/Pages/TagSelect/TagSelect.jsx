import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Text from "../../UI/Typography/Text/Text";
import Container from "../../UI/Utility/Container/Container";
import Tags from "../../Components/Tags/Tags";
import imgSRC from "../../assets/img/Saly-31.png";
import Image from "../../UI/Utility/Image/Image";
import Button from "../../Components/Button/Button";

function TagSelect() {
  //Dummy Data
  const [tags, setTags] = useState([]);
  useEffect(async () => {
    await axios
      .post("http://vahiddev-001-site1.htempurl.com/api/Tags?count=15", {})
      .then((response) => {
        const receivedData = [...response.data.tags];
        setTags((prev) => [...prev, ...receivedData]);
      });
  }, []);

  return (
    <Container>
      <div className="vh-100 bg-lightcreamy p-20 d-flex  justify-content-center align-items-center flex-column pos-rel">
        <Text classes="font-montserrat pos-abs top-center w-100 text-center">
          Let us know what you like
        </Text>
        <Image source={imgSRC} classes="mw-400" />
        <Tags data={tags} />
        <Button classes="mt-20">
          <Link to="/home">Done</Link>
        </Button>
      </div>
    </Container>
  );
}

export default TagSelect;
