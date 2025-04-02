import { Nav, NavButton } from "./styles/NavbarStyles";

// Componente Navbar
const Navbar = () => {
    return (
        <Nav>
            <NavButton to="/">Guia React</NavButton>
            <NavButton to="/reactnativeguide">Guia React Native</NavButton>
            <NavButton to="/nextjsguide">Guia Next.js</NavButton>
            <NavButton to="/vueguide">Guia Vue.js</NavButton>
            <NavButton to="/comandsguide">Guia de Comandos</NavButton>
            <NavButton to="/comandsgit">Comandos Git</NavButton>
            <NavButton to="/importantinfor">Vue.js X React X Next.js</NavButton>
            <NavButton to="/about">Sobre Min</NavButton>
        </Nav>
    );
};

export default Navbar;