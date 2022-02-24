import React from "react";
import Title from "../../UI/Typography/Title/Title";
import Text from "../../UI/Typography/Text/Text";
import { Link } from "react-router-dom";
import Container from "../../UI/Utility/Container/Container";
import Image from "../../UI/Utility/Image/Image";
import imgSRC from "../../img/Saly-19.png";
import Button from "../../Components/Button/Button";
function Welcome() {
  return (
    <Container>
      <div className="vh-100 bg-lightblue p-20 d-flex justify-content-evenly align-items-center flex-column ">
        <Image classes="w-100" source={imgSRC} />
        <div className="d-flex flex-column align-items-center">
          <Title font="font-leckerli lightcreamy">TOPFY</Title>
          <Text font="font-montserrat  text-center lightcreamy mt-10">
            We bring you the content <br /> Only <strong>YOU</strong> want :)
          </Text>
        </div>
        <Button>
          <Link to="/tagselect">Explore</Link>
        </Button>
      </div>
    </Container>
  );
}

export default Welcome;
