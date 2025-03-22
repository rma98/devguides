import { Container, Card, Title, Paragraph, Subtitle } from "./styles/AboutStyles";

export default function About() {
  return (
    <Container>
      <Card>
        <Title>Bem-vindo ao Meu Site!</Title>
        <Paragraph>Escolha uma página para navegar.</Paragraph>
        <Subtitle>Sobre Nós</Subtitle>
        <Paragraph>Esta é a página Sobre. Aqui podemos colocar informações sobre o site ou projeto.</Paragraph>
      </Card>
    </Container>
  );
}
