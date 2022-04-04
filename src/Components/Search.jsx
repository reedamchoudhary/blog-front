import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../constants/path";

const Search = () => {
  const navigate = useNavigate();

  return (
    <SearchIcon
      color={"white"}
      w={7}
      h={7}
      marginTop={"10px"}
      marginRight={"70px"}
      cursor={"pointer"}
      onClick={() => navigate(PATHS.POSTS)}
    />
  );
};

export default Search;
