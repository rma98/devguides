import { useState } from "react";
import { Container, Card, Title, Subtitle, Pre, OptionItem } from "./styles/ReactNativeGuideStyles";

export default function ReactNativeGuide() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, title: "✅ Use Expo se...", desc: "✔️ Você quer começar rápido e testar no celular sem complicação." },
    { id: 2, title: "✅ Use Expo se...", desc: "✔️ O projeto não precisa de recursos nativos avançados." },
    { id: 3, title: "✅ Use React Native CLI se...", desc: "✔️ Você precisa de total controle sobre o app." },
    { id: 4, title: "✅ Use React Native CLI se...", desc: "✔️ Precisa acessar APIs nativas do Android/iOS." }
  ];

  return (
    <Container>
      <Card>
        <Title>Bem-vindo ao Meu Site!</Title>

        <Subtitle>🚀 Guia de Instalação do React Native</Subtitle>
        <p>Diferente do React, que roda no navegador, o React Native precisa de um ambiente próprio para rodar em dispositivos móveis. Existem duas formas principais de criar um projeto:</p>

        <Subtitle>Usando Expo (Mais Fácil)</Subtitle>

        <p>O Expo é uma ferramenta que simplifica a criação e desenvolvimento de apps React Native. Ele já vem configurado com tudo que você precisa e permite testar o app rapidamente.</p>
        <p>Passos para criar um projeto com Expo:</p>
        <p>Instale o CLI do Expo:</p>
        <Pre>npm install -g expo-cli</Pre>

        <p>Crie o projeto:</p>
        <Pre>npx create-expo-app my-app</Pre>

        <p>Entre no diretório do projeto:</p>
        <Pre>cd my-app</Pre>

        <p>Inicie o servidor:</p>
        <Pre>npm start</Pre>

        <p>Use o Expo Go no celular para testar o app sem precisar emulador.</p>

        <Subtitle>✅ Vantagens do Expo:</Subtitle>
        <p>✔️ Mais fácil de configurar.</p>
        <p>✔️ Testa o app sem precisar de um emulador.</p>
        <p>✔️ Já vem com muitas bibliotecas úteis.</p>

        <Subtitle>❌ Desvantagens do Expo:</Subtitle>
        <p>⚠️ Algumas configurações avançadas podem ser limitadas.</p>
        <p>⚠️ Algumas bibliotecas podem não funcionar no Expo gerenciado.</p>

        <Subtitle>Usando React Native CLI (Mais Flexível)</Subtitle>
        <p>Se você quer mais controle sobre o projeto, pode usar a CLI oficial do React Native. Esse método exige mais configurações, mas permite acessar recursos nativos do Android/iOS.</p>
        <p>Passos para criar um projeto com React Native CLI:</p>
        <p>Instale as dependências:</p>
        <p>No Windows:</p>
        <Pre>choco install -y nodejs python2{'\n'}npm install -g yarn</Pre>

        <p>No macOS:</p>
        <Pre>brew install node{'\n'}npm install -g yarn</Pre>

        <p>Instale a CLI do React Native:</p>
        <Pre>npx react-native init MyApp</Pre>

        <p>Entre no projeto:</p>
        <Pre>cd MyApp</Pre>

        <p>Rode o app no emulador Android:</p>
        <Pre>npx react-native run-android</Pre>

        <p>Ou no iOS:</p>
        <Pre>npx react-native run-ios</Pre>

        <Subtitle>✅ Vantagens da React Native CLI:</Subtitle>
        <p>✔️ Total controle sobre o código nativo (Android e iOS).</p>
        <p>✔️ Pode usar qualquer biblioteca nativa.</p>

        <Subtitle>❌ Desvantagens da React Native CLI:</Subtitle>
        <p>⚠️ Mais difícil de configurar.</p>
        <p>⚠️ Precisa de um emulador ou dispositivo físico.</p>

        <Subtitle>Qual escolher?</Subtitle>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {options.map((option) => (
            <OptionItem key={option.id} selected={selectedOption === option.id} onClick={() => setSelectedOption(option.id)}>
              <strong style={{ color: "#63b3ed" }}>{option.title}</strong>
              <p style={{ marginTop: "8px", color: "#a0aec0" }}>{option.desc}</p>
            </OptionItem>
          ))}
        </ul>
      </Card>
    </Container>
  );
}
