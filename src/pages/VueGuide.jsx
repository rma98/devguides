import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Container, Card, Title, Subtitle, LinkButton, OptionList, OptionItem, CodeBlock } from "./styles/VueGuideStyles";

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
          <LinkButton to="/">Guia React</LinkButton>
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
          npm install{'\n'}
          npm run dev
        </CodeBlock>
      </Card>
    </Container>
  );
}
