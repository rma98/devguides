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
        <p>Framework progressivo para criar interfaces interativas. É focado na facilidade de uso e pode ser usado de forma gradual.</p>
        <Subtitle>React</Subtitle>
        <p>Biblioteca JavaScript para criar interfaces de usuário baseadas em componentes reutilizáveis. Ele é mais flexível que um framework, mas requer configurações extras para certas funcionalidades.</p>
        <Subtitle>Next.js</Subtitle>
        <p>Framework baseado em React que adiciona funcionalidades como renderização do lado do servidor (SSR), geração de páginas estáticas (SSG), roteamento avançado e otimizações automáticas.</p>

        <Subtitle><FaVuejs /> Quando usar Vue.js?</Subtitle>
        <List>
          <ListItem>Projetos pequenos e médios com desenvolvimento rápido.</ListItem>
          <ListItem>Aplicações dinâmicas que precisam de reatividade (ex: dashboards).</ListItem>
          <ListItem>Desenvolvedores que querem uma curva de aprendizado mais suave.</ListItem>
          <ListItem>Quem quer um framework que já vem com tudo (roteamento, estado, etc.).</ListItem>
        </List>

        <Subtitle>📌 Exemplos de uso</Subtitle>
        <List>
          <ListItem>Aplicativos administrativos internos.</ListItem>
          <ListItem>Páginas de monitoramento em tempo real.</ListItem>
          <ListItem>Pequenos sites interativos.</ListItem>
        </List>

        <Subtitle>🔥 Por que usar Vue.js?</Subtitle>
        <List>
          <ListItem>Fácil aprendizado.</ListItem>
          <ListItem>Estrutura simples e intuitiva.</ListItem>
          <ListItem>Mais leve e performático em projetos menores.</ListItem>
        </List>

        <Subtitle><FaReact /> Quando usar React?</Subtitle>
        <List>
          <ListItem>Projetos grandes e escaláveis.</ListItem>
          <ListItem>Quando se precisa de flexibilidade para escolher ferramentas (Redux, Zustand, etc.).</ListItem>
          <ListItem>Aplicações que exigem um ecossistema grande (bibliotecas e suporte da comunidade).</ListItem>
          <ListItem>Desenvolvimento de aplicativos móveis com React Native.</ListItem>
        </List>

        <Subtitle>📌 Exemplos de uso</Subtitle>
        <List>
          <ListItem>Aplicações de grande porte como Facebook, Instagram e Airbnb.</ListItem>
          <ListItem>Plataformas SaaS e sistemas complexos.</ListItem>
          <ListItem>Projetos que podem crescer e precisarão de muitas otimizações.</ListItem>
          <ListItem>Desenvolvimento de aplicativos móveis com React Native.</ListItem>
        </List>

        <Subtitle>🔥 Por que usar React?</Subtitle>
        <List>
          <ListItem>Maior liberdade para montar a estrutura do projeto.</ListItem>
          <ListItem>Reutilização de componentes em aplicações web e mobile (React Native).</ListItem>
          <ListItem>Grande comunidade e suporte.</ListItem>
        </List>

        <Subtitle><SiNextdotjs /> Quando usar Next.js?</Subtitle>
        <List>
          <ListItem>Projetos que precisam de SEO (Google indexa melhor).</ListItem>
          <ListItem>Aplicações que precisam carregar rápido, pois usa renderização no servidor (SSR).</ListItem>
          <ListItem>Sites estáticos que precisam de desempenho máximo.</ListItem>
          <ListItem>Plataformas que precisam misturar SSG (Static Site Generation) e SSR (Server-Side Rendering).</ListItem>
        </List>

        <Subtitle>📌 Exemplos de uso</Subtitle>
        <List>
          <ListItem>Sites de blogs e notícias (como o Medium).</ListItem>
          <ListItem>Marketplaces e e-commerces (Shopify usa Next.js).</ListItem>
          <ListItem>Portais que precisam carregar rápido e ter bom SEO.</ListItem>
          <ListItem>Aplicações que precisam rodar tanto no cliente quanto no servidor.</ListItem>
        </List>

        <Subtitle>🔥 Por que usar Next.js?</Subtitle>
        <List>
          <ListItem>Melhor performance com SSR e SSG.</ListItem>
          <ListItem>Melhor SEO do que um app só em React.</ListItem>
          <ListItem>Estrutura pronta, com otimizações automáticas.</ListItem>
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
