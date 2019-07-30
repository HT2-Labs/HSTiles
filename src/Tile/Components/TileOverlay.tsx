import styled from "styled-components";

export const TileOverlay = styled.div`
  position: absolute;
  display: flex;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  transition: opacity 1s;
  background-color: ${(props: { background: string }) => props.background};
`;

export default TileOverlay;
