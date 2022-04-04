import React, { useContext } from "react";
import CenteredFlex from "../Components/CenteredFlex";
import NotFoundBgDark from "../assets/NotFoundDark.png";
import NotFoundBgLight from "../assets/NotFoundLight.png";
import { UserContext } from "../App";
import { Heading } from "@chakra-ui/react";

const NotFound = () => {
  const { theme } = useContext(UserContext);
  return (
    <CenteredFlex
      w={"100vw"}
      h={"90vh"}
      backgroundImage={
        theme ? `url(${NotFoundBgDark})` : `url(${NotFoundBgLight})`
      }
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"900px 500px"}
      backgroundAttachment={"fixed"}
    >
      <Heading
        border={"4px dashed white"}
        padding={"20px 150px"}
        size={"3xl"}
        color={"white"}
        marginBottom={"150px"}
      >
        404 Page Not Found
      </Heading>
    </CenteredFlex>
  );
};

export default NotFound;
