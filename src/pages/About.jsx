import { Container, Card, Title, Paragraph, Button } from "./styles/AboutStyles";

export default function About() {
  return (
    <Container>
      <Card>
        <Title>Bem-vindo ao Meu Site!</Title>
        <Paragraph>Escolha uma página para navegar.</Paragraph>
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
          <Button to="/">Guia React</Button>
          <Button to="/vueguide">Guia Vue.js</Button>
          <Button to="/about">Sobre Nós</Button>
        </div>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#63b3ed", marginTop: "1.5rem" }}>Sobre Nós</h2>
        <Paragraph>Esta é a página Sobre. Aqui podemos colocar informações sobre o site ou projeto.</Paragraph>
      </Card>
    </Container>
  );
}
