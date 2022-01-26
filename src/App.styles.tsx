import styled from "styled-components";
import { Button } from "antd";
export const Wapper = styled.div`
  width: 100%;
  height: 600px;
  img {
    width: auto;
    height: 250px;
  }
`;
type GridProps = {
  col: number;
};
export const Grid = styled.div<GridProps>`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  margin: 0 100px;
`;

export const StyledButton = styled(Button)`
  position: fixed;
  z-index: 100;
  right: 50px;
  top: 50px;
`;
