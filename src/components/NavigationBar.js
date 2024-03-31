import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function NavigationBar({navLinks = [], theme, setTheme}) {
    const createLinks = navLinks.map((link, i) => {
        return (
            <LinkContainer key={i} to={link.path}>
                <Nav.Link>{link.name}</Nav.Link>
            </LinkContainer>
        );
    });

    const logo = theme === 'dark' ? '/images/logo_white.png' : '/images/logo_black.png';

    return (
        <Navbar variant={theme}>
            <Container>
                <Navbar.Brand>
                    <img src={ logo } width='200' alt='melislogo'/>
                </Navbar.Brand>
                <Nav className='ms-auto'>
                    { createLinks }
                    <Nav.Link href='https://github.com/konstantinosmelis' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={brands('github')}/>
                    </Nav.Link>
                    <Nav.Link href='https://gitlab.com/konstantinosmelis' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={brands('gitlab')}/>
                    </Nav.Link>
                    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{background: 'transparent'}}>
                        <FontAwesomeIcon className='nav-link' icon={theme === 'dark' ? solid('sun') : solid('moon')}/>
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
