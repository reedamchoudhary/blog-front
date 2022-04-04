import React, { useContext } from "react";
import ThemeToggler from "./ThemeToggler";
import Search from "./Search";
import CenteredFlex from "./CenteredFlex";
import { FaHome } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
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
      <CenteredFlex padding={"10px"} h={"7%"} justifyContent={"end"}>
        <Search />
        <ThemeToggler />
      </CenteredFlex>
    </CenteredFlex>
  );
};

export default Header;
