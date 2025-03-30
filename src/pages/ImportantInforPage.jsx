import React from "react";
import { Container, Card, Title, Subtitle, List, ListItem, SummaryTable, Th, Td } from "./styles/ImportantInforStyles";
import { FaVuejs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const ImportantInforPage = () => {
  return (
    <Container>
      <Card>
        <Title><FaReact /> Diferença entre Vue.js, React e Next.js</Title>
        <Subtitle>Vue.js</Subtitle>
        <p>Framework progressivo para interfaces dinâmicas.</p>
        <Subtitle>React</Subtitle>
        <p>Biblioteca para construção de interfaces reutilizáveis.</p>
        <Subtitle>Next.js</Subtitle>
        <p>Framework baseado no React com SSR e SSG.</p>

        <Subtitle><FaVuejs /> Quando usar Vue.js?</Subtitle>
        <List>
          <ListItem>Projetos pequenos e médios.</ListItem>
          <ListItem>Facilidade de aprendizado e desenvolvimento rápido.</ListItem>
          <ListItem>Aplicações com reatividade intensa.</ListItem>
        </List>

        <Subtitle><FaReact /> Quando usar React?</Subtitle>
        <List>
          <ListItem>Projetos escaláveis.</ListItem>
          <ListItem>Integração com React Native.</ListItem>
          <ListItem>Flexibilidade para escolher bibliotecas e ferramentas.</ListItem>
        </List>

        <Subtitle><SiNextdotjs /> Quando usar Next.js?</Subtitle>
        <List>
          <ListItem>SEO otimizado e carregamento rápido.</ListItem>
          <ListItem>Renderização no servidor (SSR) e páginas estáticas (SSG).</ListItem>
          <ListItem>Sites e plataformas grandes com otimizações automáticas.</ListItem>
        </List>

        <Subtitle>📌 Resumo rápido</Subtitle>
        <SummaryTable>
          <thead>
            <tr>
              <Th>Tecnologia</Th>
              <Th>Melhor para...</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Vue.js</Td>
              <Td>Projetos pequenos/médios, reatividade fácil.</Td>
            </tr>
            <tr>
              <Td>React</Td>
              <Td>Aplicações escaláveis, integração com mobile.</Td>
            </tr>
            <tr>
              <Td>Next.js</Td>
              <Td>SEO, SSR, sites rápidos e otimizados.</Td>
            </tr>
          </tbody>
        </SummaryTable>
      </Card>
    </Container>
  );
};

export default ImportantInforPage;
