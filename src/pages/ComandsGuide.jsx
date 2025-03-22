import { Container, Card, Title, Subtitle, Pre } from "./styles/ComandsGuideStyles";

export default function ComandsGuide() {
    return (
        <Container>
            <Card>
                <Title>Bem-vindo ao Meu Site!</Title>

                <Subtitle>🚀 Guia de Comandos</Subtitle>

                <Subtitle>1️⃣ Comandos - Vite</Subtitle>
                <p>Criar projeto (Vanilla, Vue, React, Preact, Lit, Svelte, Solid, Qwik, Angular, Others...)</p>
                <Pre>npm create vite .</Pre>

                <p>Instalar dependências</p>
                <Pre>npm install</Pre>

                <p>Rodar projeto</p>
                <Pre>npm run dev</Pre>

                <Subtitle>2️⃣ Comandos - React</Subtitle>
                <p>Instalar biblioteca de ícones do react-icons</p>
                <Pre>npm install react-icons</Pre>

                <p>Instalar React Router</p>
                <Pre>npm install react-router-dom</Pre>

                <p>Instalar Styled Components</p>
                <Pre>npm install styled-components</Pre>

                <Subtitle>3️⃣ Comandos - Vue</Subtitle>
                <p>Instalar Vue Router</p>
                <Pre>npm install vue-router</Pre>

                <p>Instalar Vuex</p>
                <Pre>npm install vuex</Pre>

                <p>Instalar biblioteca Fontawesome</p>
                <Pre>npm install @fortawesome/vue-fontawesome {'\n'}@fortawesome/free-solid-svg-icons {'\n'}@fortawesome/fontawesome-svg-core</Pre>

                <p>Realizar a comunicação entre servidor e cliente</p>
                <Pre>npm install axios</Pre>
            </Card>
        </Container>
    );
}
