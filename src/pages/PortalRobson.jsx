import React from 'react';
import { Container, Header, Main, Content, Sidebar, Section, SectionTitle, Article, ArticleHeader, Footer } from "./styles/PortalRobsonStyles";

export default function PortalRobson () {
    return (
        <Container>
            <Header>
                <h1>Portal Robson</h1>
            </Header>

            <Main>
                <Content>
                    <Section>
                        <SectionTitle>Notícias</SectionTitle>

                        <Article>
                            <ArticleHeader>
                                <h3>Crise dos Chips</h3>
                            </ArticleHeader>
                            <p>A indústria enfrenta escassez global de semicondutores, impactando diversas áreas da tecnologia...</p>
                        </Article>

                        <Article>
                            <ArticleHeader>
                                <h3>Lançamento do Novo Framework</h3>
                            </ArticleHeader>
                            <p>O Vue 4 promete revolucionar a forma como desenvolvemos interfaces modernas e responsivas...</p>
                        </Article>
                    </Section>

                    <Section>
                        <SectionTitle>Eventos</SectionTitle>

                        <Article>
                            <ArticleHeader>
                                <h3>JS Conf Brasil</h3>
                            </ArticleHeader>
                            <p>O maior evento de JavaScript do país está chegando com muitas novidades e workshops incríveis!</p>
                        </Article>
                    </Section>
                </Content>

                <Sidebar>
                    <h4>Menu Rápido</h4>
                    <ul>
                        <li><a href="#noticias">Notícias</a></li>
                        <li><a href="#eventos">Eventos</a></li>
                    </ul>
                </Sidebar>
            </Main>

            <Footer>
                <p>&copy; 2025 Robson Corp. Todos os direitos reservados.</p>
            </Footer>
        </Container>
    );
}
