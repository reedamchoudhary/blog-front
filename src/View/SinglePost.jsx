import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../App";
import Page from "../Components/Page";
import Card from "../Components/Card";
import CenteredFlex from "../Components/CenteredFlex";
import { Heading } from "@chakra-ui/react";
import Carousel, { CarouselItem } from "../Components/Carousel";
import * as Path from "../constants/path";

const SinglePost = () => {
  const { postName } = useParams();
  const { data } = useContext(UserContext);
  const navigate = useNavigate();

  const [post, setPost] = useState("");
  const [firstGridArray, setFirstGridArray] = useState([]);
  const [horizontalCarouselClass, setHorizontalCarouselClass] = useState("");
  const [firstGrid, setFirstGrid] = useState({
    start: 0,
    end: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  useEffect(() => {
    if (data?.length > 0) {
      let auxData = data?.filter((item) => item.postTitle.trim() === postName);
      console.log(auxData);
      if (auxData.length > 0) {
        setPost(auxData[0]);
      } else {
        navigate(Path.ANYOTHERPATH);
      }
    }
    setFirstGrid({ ...firstGrid, end: data.length });
    changeCardData();
  }, [data, postName]);

  const changeCardData = () => {
    let tempArray = [];

    tempArray =
      data.length > 0
        ? data?.map((item, index) => {
            if (item.postTitle?.trim() !== postName) {
              return (
                <CarouselItem>
                  <Card
                    title={item?.postTitle}
                    description={item?.Description}
                    date={item?.Date}
                    engagement={item?.Engagement}
                  />
                </CarouselItem>
              );
            }
          })
        : [];

    setFirstGridArray(tempArray);
  };

  return (
    <CenteredFlex flexDirection={"column"} scrollBehaviour={"smooth"}>
      <Page post={post} />

      <Heading marginTop={"50px"}>More Posts...</Heading>
      <CenteredFlex
        w={"80vw"}
        h={"260px"}
        marginBottom={"40px"}
        justifyContent={"space-between"}
      >
        <Carousel
          limitingModulo={4}
          translatePercent={20}
          itemArrayLength={firstGridArray.length}
        >
          <CenteredFlex>{firstGridArray}</CenteredFlex>
        </Carousel>
      </CenteredFlex>
    </CenteredFlex>
  );
};

export default SinglePost;
