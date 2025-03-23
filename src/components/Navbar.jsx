import { Nav, NavButton } from "./styles/NavbarStyles";

// Componente Navbar
const Navbar = () => {
    return (
        <Nav>
            <NavButton to="/">Guia React</NavButton>
            <NavButton to="/vueguide">Guia Vue.js</NavButton>
            <NavButton to="/comandsguide">Guia de Comandos</NavButton>
            <NavButton to="/comandsgit">Comandos Git</NavButton>
            <NavButton to="/about">Sobre Min</NavButton>
        </Nav>
    );
};

export default Navbar;