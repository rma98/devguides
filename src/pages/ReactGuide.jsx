import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Container, Card, Title, Subtitle, LinkButton, Pre, OptionItem, FileItem } from "./styles/ReactGuideStyles";

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
        <ul>
          {["src/assets/react.svg", "src/App.css", "src/index.css", "public/vite.svg"].map((file) => (
            <FileItem key={file}>
              <FaCheckCircle style={{ color: "#68d391", fontSize: "1.5rem" }} />
              <span>{file}</span>
            </FileItem>
          ))}
        </ul>

        <Subtitle>🚀 Rodando o projeto</Subtitle>
        <p>Agora basta rodar os seguintes comandos para instalar as dependências e iniciar o servidor:</p>
        <Pre>
          npm install{'\n'}
          npm run dev
        </Pre>
      </Card>
    </Container>
  );
}
