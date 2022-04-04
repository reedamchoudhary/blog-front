import React, { useContext } from "react";
import { UserContext } from "../App";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const ThemeToggler = () => {
  const { theme, setTheme, colors } = useContext(UserContext);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <Box
      backgroundColor={theme ? colors.lightBgColor : colors.darkBgColor}
      position={"fixed"}
      top={"0"}
      padding={"7px"}
      borderBottomRadius={"10px"}
      borderTopLeftRadius={"-5px"}
      cursor={"pointer"}
      onClick={toggleTheme}
    >
      {!theme ? (
        <MoonIcon color={"white"} w={6} h={6} marginTop={"10px"} />
      ) : (
        <SunIcon marginTop={"10px"} color={"black"} w={6} h={6} />
      )}
    </Box>
  );
};

export default ThemeToggler;
