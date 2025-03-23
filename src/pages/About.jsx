import { Container, Card, Title, Paragraph, Avatar, Buttons, SocialLinks } from "./styles/AboutStyles";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import robsonImg from "../assets/img/robson.png"; // ✅ Importando a imagem

export default function About() {
  return (
    <Container>
      <Card>
        <Title>Olá, meu nome é <span>Robson Albuquerque</span></Title>

        {/* Exibindo a imagem */}
        <Avatar src={robsonImg} alt="Robson Albuquerque" />

        <Paragraph className="subtitle">
          Transformando ideias em experiências digitais que fazem a diferença.
        </Paragraph>

        {/* Simulando efeito de digitação */}
        <Paragraph className="typing">Desenvolvedor Frontend | React | Vue.js</Paragraph>

        <Buttons>
          <a href="https://wa.me/+5581971168633" target="_blank" className="btn btn-contact">Contato</a>
        </Buttons>

        <SocialLinks>
          <a href="https://linkedin.com/in/robson-monteiro-de-albuquerque-8b3853230/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rma98" target="_blank">
            <FaGithub />
          </a>
          <a href="https://instagram.com/robson.albuquerque_cm/" target="_blank">
            <FaInstagram />
          </a>
        </SocialLinks>
      </Card>
    </Container>
  );
}
