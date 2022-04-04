import React, { useContext } from "react";
import "./Components.css";
import { UserContext } from "../App";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as Path from "../constants/path";

const Card = (props) => {
  const navigate = useNavigate();

  const { theme, colors } = useContext(UserContext);
  const {
    title,
    description,
    engagement,
    date,
    w,
    minHeight,
    hover = true,
    headingFont = "23px",
    lineHeight,
  } = props;

  const onClickHandler = () => {
    navigate(`${Path.POSTS}/${title}`);
  };

  return (
    <Box
      className={"card"}
      width={w ? w : "230px"}
      minHeight={minHeight ? minHeight : ""}
      flexShrink={"0"}
      style={{
        margin: "10px",
        backgroundColor: theme
          ? "rgba(0, 0, 0, 0.6)"
          : "rgba(255, 255, 255, 0.6)",
      }}
      _hover={
        w || minHeight
          ? {
              w: w,
              minHeight: minHeight,
            }
          : ""
      }
      onClick={onClickHandler}
    >
      <h1
        style={{
          fontSize: headingFont,
          marginBottom: "10px",
          height: lineHeight,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontFamily: "Laila",
          fontSize: "13px",
          padding: "10px 0px",
          color: colors.pink,
        }}
      >
        <i style={{ display: "block" }}>
          {date}.{" "}
          <span style={{ padding: "0px 10px" }}>
            {engagement} {engagement ? "mins read" : ""}
          </span>
        </i>
      </p>
      <p>{description}</p>
    </Box>
  );
};

export default Card;
