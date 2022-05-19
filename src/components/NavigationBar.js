import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function NavigationBar({navLinks}) {
    const createLinks = navLinks.map((link, i) => {
        return (
            <LinkContainer key={i} to={link.path}>
                <Nav.Link>{link.name}</Nav.Link>
            </LinkContainer>
        );
    });

    return (
        <Navbar expand="lg" variant="dark" style={{fontSize:'20px', zIndex: "2"}}>
            <Container>
                <Navbar.Brand>
                    <img src="/images/logo_white.png" width="200"/>{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Container fluid>
                    <Navbar.Collapse id="nav-scroll">
                        <Nav className="ms-auto">
                            { createLinks }
                            <a className="nav-link" href="https://github.com/konstantinosmelis" target="_blank">
                                <FontAwesomeIcon icon={brands("github")}/>
                            </a>
                            <a className="nav-link" href="https://gitlab.com/konstantinosmelis" target="_blank">
                                <FontAwesomeIcon icon={brands("gitlab")}/>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;