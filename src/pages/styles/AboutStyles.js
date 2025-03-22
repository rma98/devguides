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

const Button = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #3182ce;
  }
`;

export { Container, Card, Title, Paragraph, Button };