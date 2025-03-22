import { Nav, NavButton } from "./styles/NavbarStyles";

// Componente Navbar
const Navbar = () => {
    return (
        <Nav>
            <NavButton to="/">Guia React</NavButton>
            <NavButton to="/vueguide">Guia Vue.js</NavButton>
            <NavButton to="/about">Sobre Nós</NavButton>
        </Nav>
    );
};

export default Navbar;