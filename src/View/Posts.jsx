import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import Card from "../Components/Card";
import CenteredFlex from "../Components/CenteredFlex";
import "./CommonScreen.css";

const Posts = () => {
  const { data, theme, colors } = useContext(UserContext);
  const [allPostsArray, setAllPostsArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setAllPostsArray(data);
  }, [data]);

  const allPosts =
    allPostsArray.length > 0 ? (
      allPostsArray?.map((item, index) => {
        return (
          <Card
            title={item?.postTitle}
            description={item?.Description}
            date={item?.Date}
            engagement={item?.Engagement}
            w={"700px"}
            minHeight={"150px"}
            hover={false}
            lineHeight={"150%"}
          />
        );
      })
    ) : (
      <p style={{ color: "gray", fontSize: "25px" }}>No Posts Here...</p>
    );

  useEffect(() => {
    if (searchValue.length > 0) {
      const auxArray = data.filter((item) =>
        item.postTitle?.toLowerCase().includes(searchValue?.toLowerCase())
      );
      setAllPostsArray(auxArray);
    } else setAllPostsArray(data);
  }, [searchValue]);

  return (
    <CenteredFlex className={"posts"} direction={"column"}>
      <Box
        position={"fixed"}
        top={"50px"}
        zIndex={"10"}
        backgroundColor={theme ? colors.darkBgColor : colors.lightBgColor}
      >
        <InputGroup
          marginBottom={"30px"}
          w={"900px"}
          backgroundColor={"white"}
          borderRadius={"10px"}
        >
          <Input
            autoFocus
            value={searchValue}
            color={"black"}
            onChange={(e) => {
              setSearchValue(e.target.value);
              // searchItem();
            }}
          />
          <InputRightElement>
            <SearchIcon color={"black"} />
          </InputRightElement>
        </InputGroup>
      </Box>

      <Box marginTop={"60px"} paddingTop={"10px"}>
        {allPosts}
      </Box>
    </CenteredFlex>
  );
};

export default Posts;
