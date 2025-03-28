import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(180deg, #87ceeb, #ffffff);
  text-align: center;
  padding: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 5px;
  margin-top: 20px;
`;

export const Cell = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#ffeb3b" : "#fff")};
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
