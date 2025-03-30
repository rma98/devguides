import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #1a202c;
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  max-width: 768px;
  width: 90%;
  background-color: #2d3748;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border: 1px solid #4a5568;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #63b3ed;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const ListItem = styled.li`
  padding: 8px;
  background: #4a5568;
  border-radius: 5px;
  margin: 5px 0;
  font-size: 16px;
`;

export const SummaryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  background-color: #4a5568;
  border-radius: 8px;
  overflow: hidden;
`;

export const Th = styled.th`
  background: #63b3ed;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #2d3748;
  color: #e2e8f0;
`;
