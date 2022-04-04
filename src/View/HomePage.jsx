import React, { useContext, useEffect, useState } from "react";
import "./CommonScreen.css";
// import { Heading } from "@chakra-ui/react";
import CenteredFlex from "../Components/CenteredFlex";
import { UserContext } from "./../App";
import Card from "../Components/Card";
import NavigationArrows from "../Components/NavigationArrows";
import Carousel, { CarouselItem } from "../Components/Carousel";

const HomePage = () => {
  const { data, theme } = useContext(UserContext);
  const [firstGrid, setFirstGrid] = useState({
    start: 0,
    end: 0,
  });
  const [secondGrid, setSecondGrid] = useState({
    start: 0,
    end: 0,
  });
  const [firstGridArray, setFirstGridArray] = useState([]);
  const [secondGridArray, setSecondGridArray] = useState([]);
  const [horizontalCarouselClass, setHorizontalCarouselClass] = useState("");

  useEffect(() => {
    let half = Math.ceil(data?.length / 2);
    setFirstGrid({ ...firstGrid, end: half });
    setSecondGrid({ ...secondGrid, start: half, end: data?.length });
  }, [data]);

  useEffect(() => {
    changeCardData(firstGrid, setFirstGridArray);
    changeCardData(secondGrid, setSecondGridArray);
  }, [firstGrid, secondGrid]);

  const changeCardData = (grid, setCardGridArray) => {
    let auxArray = [];
    for (let i = grid.start; i < grid.end; i++) {
      auxArray.push(
        <CarouselItem>
          <Card
            title={data[i]?.postTitle}
            description={data[i]?.Description}
            date={data[i]?.Date}
            engagement={data[i]?.Engagement}
          />
        </CarouselItem>
      );
    }
    setCardGridArray(auxArray);
  };

  return (
    <CenteredFlex direction={"column"}>
      <CenteredFlex w={"80vw"} h={"260px"} justifyContent={"space-between"}>
        <Carousel
          limitingModulo={4}
          translatePercent={50}
          itemArrayLength={firstGridArray.length}
        >
          <CenteredFlex>{firstGridArray}</CenteredFlex>
        </Carousel>
      </CenteredFlex>
      <h1 className={"hero-heading"}>RHYTHM.DEV</h1>
      <CenteredFlex w={"80vw"} h={"260px"} justifyContent={"space-between"}>
        <Carousel
          limitingModulo={4}
          translatePercent={50}
          itemArrayLength={secondGridArray.length}
        >
          <CenteredFlex>{secondGridArray}</CenteredFlex>
        </Carousel>
      </CenteredFlex>
    </CenteredFlex>
  );
};

export default HomePage;
