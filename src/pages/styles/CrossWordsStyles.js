import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to top, #87ceeb, #ffffff);
  text-align: center;
  padding: 20px;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 10px;
`;

export const Hint = styled.p`
  font-size: 18px;
  color: #34495e;
  margin-bottom: 15px;
`;

export const WordBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  max-width: 400px;
  margin-bottom: 15px;
`;

export const Word = styled.div`
  padding: 5px 10px;
  background: #f1f1f1;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
  font-weight: bold;
`;

export const WordInput = styled.input`
  padding: 10px;
  font-size: 18px;
  text-align: center;
  border: 2px solid #3498db;
  border-radius: 5px;
  width: 200px;
  outline: none;
  text-transform: uppercase;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Video = styled.video`
  max-width: 90%;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;