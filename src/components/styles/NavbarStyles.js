import { Link } from "react-router-dom";
import styled from "styled-components";

// Estilização do Navbar
const Nav = styled.nav`
  background-color: #2d3748;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const NavButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background-color: #3182ce;
  }
`;

export { Nav, NavButton };