import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../App";
import CenteredFlex from "./CenteredFlex";
import { BiPlanet } from "react-icons/bi";

const Page = (props) => {
  const { theme, colors } = useContext(UserContext);
  const { post } = props;
  return (
    <CenteredFlex w={"100%"}>
      <CenteredFlex
        position={"relative"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        w={"55%"}
        minWidth={"700px"}
        borderRadius={"20px"}
        textAlign={"justify"}
        margin={"20px"}
        padding={"60px"}
        minHeight={"85vh"}
        backgroundColor={
          theme ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"
        }
      >
        <Heading>{post.postTitle}</Heading>
        <CenteredFlex
          justifyContent={"space-between"}
          w={"100%"}
          marginY={"20px"}
          style={{
            fontFamily: "Laila",
            fontSize: "13px",
            padding: "10px 0px",
            color: colors.pink,
          }}
        >
          <i>{post.Date}</i> <i>{post.Engagement} mins read</i>
        </CenteredFlex>
        <Text>{post.postBody}</Text>
        <CenteredFlex
          justifyContent={"space-between"}
          w={"100%"}
          marginY={"20px"}
        >
          <Text> </Text>
          <i
            style={{
              fontFamily: "Laila",
              fontSize: "13px",
              padding: "10px 0px",
              color: colors.pink,
            }}
          >
            -By Reedam Choudhary
          </i>
        </CenteredFlex>
        <CenteredFlex position={"absolute"} bottom={"10px"}>
          <BiPlanet size={"20px"} color={colors.pink} />
          <BiPlanet
            size={"20px"}
            color={colors.pink}
            style={{ margin: "0px 20px" }}
          />
          <BiPlanet size={"20px"} color={colors.pink} />
        </CenteredFlex>
      </CenteredFlex>
    </CenteredFlex>
  );
};

export default Page;
