import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #1a202c;
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  max-width: 768px;
  width: 100%;
  background-color: #2d3748;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border: 1px solid #4a5568;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #63b3ed;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const LinkButton = styled(Link)`
  display: inline-block;
  padding: 10px 16px;
  background-color: #4299e1;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: white;
  margin-right: 8px;
  transition: 0.3s;

  &:hover {
    background-color: #3182ce;
  }
`;

const OptionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OptionItem = styled.li`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #4a5568;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
  background-color: ${(props) => (props.selected ? "#3182ce" : "#2d3748")};
  transform: ${(props) => (props.selected ? "scale(1.05)" : "none")};

  &:hover {
    background-color: #4a5568;
    transform: scale(1.05);
  }
`;

const CodeBlock = styled.pre`
  background-color: #4a5568;
  padding: 16px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 1rem;
  color: #48bb78;
`;

export { Container, Card, Title, Subtitle, LinkButton, OptionList, OptionItem, CodeBlock };