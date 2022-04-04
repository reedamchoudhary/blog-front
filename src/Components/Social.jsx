import { Box } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { UserContext } from "../App";

const Social = () => {
  const { colors, theme, showSocial, setShowSocial } = useContext(UserContext);

  const socialColor = colors.pink;

  return (
    <Box backgroundColor={"red"}>
      <Box
        position={"fixed"}
        bottom={"-300px"}
        right={"-300px"}
        w={"600px"}
        h={"600px"}
        borderRadius={"100%"}
        backgroundColor={"rgba(255, 210, 46, 0.7)"}
        // display={showSocial ? "" : "none"}
        transform={showSocial ? "scale(1)" : "scale(0)"}
        transition={"all 0.4s ease"}
      ></Box>
      <Box
        position={"fixed"}
        bottom={"190px"}
        right={"60px"}
        transform={showSocial ? "scale(1)" : "scale(0)"}
        transition={"transform 0.4s ease"}
      >
        <GrInstagram
          size={"35px"}
          cursor={"pointer"}
          color={socialColor}
          onClick={() => window.open("https://www.instagram.com/geekydrama/")}
        />
      </Box>
      <Box
        position={"fixed"}
        bottom={"140px"}
        right={"150px"}
        transform={showSocial ? "scale(1)" : "scale(0)"}
        transition={"transform 0.4s ease"}
      >
        <FiTwitter
          size={"35px"}
          cursor={"pointer"}
          color={socialColor}
          onClick={() => window.open("https://twitter.com/ReedamChoudhary")}
        />
      </Box>
      <Box
        position={"fixed"}
        bottom={"60px"}
        right={"180px"}
        transform={showSocial ? "scale(1)" : "scale(0)"}
        transition={"transform 0.4s ease"}
      >
        <GrLinkedinOption
          size={"35px"}
          cursor={"pointer"}
          color={socialColor}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/reedam-choudhary-295124154/"
            )
          }
        />
      </Box>
      <Box
        position={"fixed"}
        bottom={"30px"}
        right={"30px"}
        onClick={(e) => {
          e.stopPropagation();
          setShowSocial(!showSocial);
        }}
      >
        <FaUserAstronaut size={"35px"} cursor={"pointer"} color={socialColor} />
      </Box>
    </Box>
  );
};

export default Social;
