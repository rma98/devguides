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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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

const Pre = styled.pre`
  background-color: #4a5568;
  padding: 12px;
  border-radius: 8px;
  font-family: monospace;
  color: #68d391;
  font-size: 1.2rem;
`;

const OptionItem = styled.li`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #4a5568;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: ${({ selected }) => (selected ? "#3182ce" : "transparent")};
  transform: ${({ selected }) => (selected ? "scale(1.05)" : "none")};
  &:hover {
    background-color: ${({ selected }) => (selected ? "#3182ce" : "#4a5568")};
    transform: scale(1.05);
  }
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 16px;
  background-color: #4299e1;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background-color: #3182ce;
  }
`;

const FileItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #4a5568;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export default function ReactGuide() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, title: "TypeScript", desc: "Adiciona suporte ao TypeScript, que melhora a segurança do código com tipagem estática." },
    { id: 2, title: "TypeScript + SWC", desc: "Igual ao TypeScript, mas usa o compilador SWC (mais rápido que Babel) para melhorar a performance do build." },
    { id: 3, title: "JavaScript", desc: "Usa apenas JavaScript puro, sem TypeScript." },
    { id: 4, title: "JavaScript + SWC", desc: "Igual ao JavaScript, mas com SWC para compilar mais rápido." },
    { id: 5, title: "React Router v7", desc: "Configura o projeto já com React Router, que é usado para criar navegação entre páginas." }
  ];

  return (
    <Container>
      <Card>
        <Title>Bem-vindo ao Meu Site!</Title>
        <p>Escolha uma página para navegar.</p>
        <div>
          <LinkButton to="/">Guia React</LinkButton>
          <LinkButton to="/vueguide">Guia Vue.js</LinkButton>
          <LinkButton to="/about">Sobre Nós</LinkButton>
        </div>
        <Subtitle>🚀 Guia de Instalação do React com Vite</Subtitle>

        <Subtitle>1️⃣ Criando o projeto</Subtitle>
        <Pre>npm create vite .</Pre>

        <Subtitle>2️⃣ Escolhendo a opção</Subtitle>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {options.map((option) => (
            <OptionItem key={option.id} selected={selectedOption === option.id} onClick={() => setSelectedOption(option.id)}>
              <strong style={{ color: "#63b3ed" }}>{option.title}</strong>
              <p style={{ marginTop: "8px", color: "#a0aec0" }}>{option.desc}</p>
            </OptionItem>
          ))}
        </ul>

        <Subtitle>🛑 Arquivos a remover</Subtitle>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {["src/assets/react.svg", "src/App.css", "src/index.css", "public/vite.svg"].map((file) => (
            <FileItem key={file}>
              <FaCheckCircle style={{ color: "#68d391", fontSize: "1.5rem" }} />
              <span>{file}</span>
            </FileItem>
          ))}
        </ul>

        <Subtitle>🚀 Rodando o projeto</Subtitle>
        <p>Agora basta rodar os seguintes comandos para instalar as dependências e iniciar o servidor:</p>
        <Pre>npm install{'\n'}npm run dev</Pre>
      </Card>
    </Container>
  );
}
