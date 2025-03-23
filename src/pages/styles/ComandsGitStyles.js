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
  width: 90%; /* Reduz a largura em telas menores */
  background-color: #2d3748;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border: 1px solid #4a5568;

  @media (max-width: 480px) {
    padding: 20px; /* Menos padding para evitar excesso de espaço */
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #63b3ed;
  text-align: center; /* Melhor centralização em telas pequenas */

  @media (max-width: 480px) {
    font-size: 2rem; /* Diminui o tamanho da fonte em telas menores */
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Ajusta a fonte para mobile */
  }
`;

const Pre = styled.pre`
  background-color: #4a5568;
  padding: 12px;
  border-radius: 8px;
  font-family: monospace;
  color: #68d391;
  font-size: 1.2rem;
  max-width: 100%; /* Evita que o conteúdo ultrapasse a tela */
  overflow-x: auto; /* Permite rolagem horizontal para códigos longos */

  @media (max-width: 480px) {
    font-size: 1rem; /* Diminui a fonte em telas menores */
    padding: 8px; /* Ajusta o padding para melhor encaixe */
  }
`;

export { Container, Card, Title, Subtitle, Pre };
