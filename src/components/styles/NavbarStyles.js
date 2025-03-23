import { Link } from "react-router-dom";
import styled from "styled-components";

// Estilização do Navbar
const Nav = styled.nav`
  background-color: #2d3748;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap; /* Permite que os botões quebrem para novas linhas se necessário */

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os itens verticalmente */
    align-items: center; /* Centraliza os botões */
    gap: 0.5rem;
  }
`;

const NavButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;
  text-align: center;
  width: auto; /* Garante que os botões não fiquem muito largos */
  min-width: 120px; /* Evita botões muito pequenos */

  &:hover {
    background-color: #3182ce;
  }

  @media (max-width: 768px) {
    width: 80%; /* Ocupa 80% da tela para melhor usabilidade */
  }
`;

export { Nav, NavButton };
