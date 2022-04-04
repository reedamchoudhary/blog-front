import React, { useState } from "react";
import NavigationArrows from "./NavigationArrows";
import CenteredFlex from "./CenteredFlex";

export const CarouselItem = ({ children }) => {
  return <div className={"carousel-item"}>{children}</div>;
};

const Carousel = (props) => {
  const { itemArrayLength, children, translatePercent, limitingModulo } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <NavigationArrows
      limitingModulo={limitingModulo}
      itemArrayLength={itemArrayLength}
      setActiveIndex={setActiveIndex}
      activeIndex={activeIndex}
    >
      <CenteredFlex w={"1000px"} overflow={"hidden"}>
        <div
          className={"inner"}
          style={{ transform: `translate(${activeIndex * translatePercent}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child);
          })}
        </div>
      </CenteredFlex>
    </NavigationArrows>
  );
};

export default Carousel;
