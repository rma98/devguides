import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
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
  font-size: 2rem;
  font-weight: bold;
  color: #63b3ed;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #63b3ed;
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

export default function VueGuide() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, title: "TypeScript", desc: "Adiciona suporte ao TypeScript, que melhora a segurança do código com tipagem estática." },
    { id: 2, title: "JavaScript", desc: "Usa apenas JavaScript puro, sem TypeScript." }
  ];

  return (
    <Container>
      <Card>
        <Title>Bem-vindo ao Meu Site!</Title>
        <p>Escolha uma página para navegar.</p>
        <div>
          <LinkButton to="/">Home</LinkButton>
          <LinkButton to="/vueguide">Guia Vue.js</LinkButton>
          <LinkButton to="/about">Sobre Nós</LinkButton>
        </div>
        <Subtitle>🚀 Guia de Instalação do Vue.js com Vite</Subtitle>

        <Subtitle>1️⃣ Criando o projeto</Subtitle>
        <CodeBlock>npm create vite .</CodeBlock>

        <Subtitle>2️⃣ Escolhendo a opção</Subtitle>
        <OptionList>
          {options.map((option) => (
            <OptionItem key={option.id} selected={selectedOption === option.id} onClick={() => setSelectedOption(option.id)}>
              <strong>{option.title}</strong>
              <p>{option.desc}</p>
            </OptionItem>
          ))}
        </OptionList>

        <Subtitle>🛑 Arquivos a remover</Subtitle>
        <ul>
          {["src/assets/vue.svg", "src/style.css", "public/vite.svg"].map((file) => (
            <li key={file} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#4a5568", padding: "12px", borderRadius: "8px" }}>
              <FaCheckCircle style={{ color: "#48bb78" }} />
              <span>{file}</span>
            </li>
          ))}
        </ul>

        <Subtitle>🚀 Rodando o projeto</Subtitle>
        <p>Agora basta rodar os seguintes comandos para instalar as dependências e iniciar o servidor:</p>
        <CodeBlock>
          npm install
          npm run dev
        </CodeBlock>
      </Card>
    </Container>
  );
}
