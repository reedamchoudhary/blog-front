import { Flex } from "@chakra-ui/react";
import React from "react";

const CenteredFlex = (props) => {
  const {
    children,
    direction = "row",

    ...rest
  } = props;
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={direction}
      margin={"0px"}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default CenteredFlex;
