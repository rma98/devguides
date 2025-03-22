import { Link } from "react-router-dom";
import styled from "styled-components";

// Estilização com Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a202c;
  color: white;
`;

const Card = styled.div`
  padding: 1.5rem;
  background-color: #2d3748;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #63b3ed;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  color: #a0aec0;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export { Container, Card, Title, Paragraph, Subtitle };