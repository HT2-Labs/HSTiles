import styled from "styled-components";

export const SliderItem = styled.div`
  margin: 10px;
  display: inline-block;
`;

export const SliderInner = styled.div`
  min-width: 4000px;
`;

export const Slider = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  left: -20px;
  right: -20px;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
`;

export default Slider;
