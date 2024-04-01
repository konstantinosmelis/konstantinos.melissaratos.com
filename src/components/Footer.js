import { PropTypes } from 'prop-types'
import { Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer({theme}) {
    const text = theme === 'dark' ? 'light' : 'dark';

    return (
        <footer className='d-flex flex-wrap justify-content-center align-items-center border-top'>
            <Col className='justify-content-end' md={4} sm={12}>
                <span>
                    © {new Date().getFullYear()} Konstantinos Melissaratos
                </span>
            </Col>
            <Col className='justify-content-end' md={4} sm={12}>
                <Nav style={{float: 'right'}}>
                    <Nav.Link className={'link-' + text} href='https://www.facebook.com/konstantinos.melissaratos/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={brands('facebook')}/>
                    </Nav.Link>
                    <Nav.Link className={'link-' + text} href='https://www.instagram.com/konstantinos_melis/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={brands('instagram')}/>                        
                    </Nav.Link>
                    <Nav.Link className={'link-' + text} href='https://twitter.com/kmelissaratos/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={brands('x-twitter')}/>
                    </Nav.Link>
                    <Nav.Link className={'link-' + text} href='https://www.linkedin.com/in/konstantinos-melissaratos/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={brands('linkedin')}/>
                    </Nav.Link>
                </Nav>
            </Col>
        </footer>
    );
}

Footer.propTypes = {
    theme: PropTypes.string.isRequired
}

export default Footer;
