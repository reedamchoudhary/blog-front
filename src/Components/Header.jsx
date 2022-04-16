import React, { useContext } from "react";
import ThemeToggler from "./ThemeToggler";
import Search from "./Search";
import CenteredFlex from "./CenteredFlex";
import { FaHome } from "react-icons/fa";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as Path from "../constants/path";
import { UserContext } from "../App";

const Header = () => {
  const { colors, theme } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <CenteredFlex
      justifyContent={"space-between"}
      marginRight={"30px"}
      marginLeft={"30px"}
      position={"fixed"}
      w={"97%"}
      zIndex={"10"}
      backgroundColor={theme ? colors.darkBgColor : colors.lightBgColor}
    >
      <Flex>
        <Box
          marginTop={"10px"}
          visibility={window.location.pathname === Path.HOME ? "hidden" : ""}
        >
          <FaHome
            size={"33px"}
            cursor={"pointer"}
            color={"white"}
            onClick={() => navigate(Path.HOME)}
          />
        </Box>

        <Box
          backgroundColor={theme ? colors.lightBgColor : colors.darkBgColor}
          position={"relative"}
          top={"-15px"}
          left={"150px"}
          padding={"10px 15px"}
          borderBottomRadius={"10px"}
          borderTopLeftRadius={"-5px"}
          cursor={"pointer"}
          marginTop={"10px"}
          letterSpacing={"2px"}
          color={theme ? "black" : "white"}
          visibility={window.location.pathname === Path.HOME ? "hidden" : ""}
        >
          <Heading size={"sm"}>RHYTHM.DEV</Heading>
        </Box>
      </Flex>
      <CenteredFlex padding={"10px"} h={"7%"} justifyContent={"end"}>
        <Search />
        <ThemeToggler />
      </CenteredFlex>
    </CenteredFlex>
  );
};

export default Header;
