import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Container, Card, Title, Subtitle, OptionList, OptionItem, Pre } from "./styles/VueGuideStyles";

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

        <Subtitle>🚀 Guia de Instalação do Vue.js com Vite</Subtitle>
        <Subtitle>1️⃣ Criando o projeto</Subtitle>

        <Pre>npm create vite .</Pre>

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
        <Pre>
          npm install{'\n'}
          npm run dev
        </Pre>
      </Card>
    </Container>
  );
}
