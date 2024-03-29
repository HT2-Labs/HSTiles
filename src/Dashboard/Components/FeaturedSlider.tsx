import * as React from "react";
import { makeCarousel } from "react-reveal/makeCarousel";
import { Slide } from '@react-reveal/Slide';
import { Container } from "@material-ui/core";

import styled from 'styled-components';
export const FeaturedSlider = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 150px;
`;
const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

export const FeaturedSlides = () => {
      <Carousel defaultWait={1000} /*wait for 1000 milliseconds*/ >
        <Slide right>
          <div>
            <h1>Slide 1</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 2</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
      </Carousel>
}


export default FeaturedSlider;
