import { Col, Container, Row } from 'react-bootstrap';
import TypeWriter from 'typewriter-effect';

function Landing() {
    const calculateAge = (birthday) => {
        let birthdayDate = new Date(birthday);
        let monthDif = Date.now() - birthdayDate.getTime();
        let diffDate = new Date(monthDif);
        let year = diffDate.getUTCFullYear();
        return Math.abs(year - 1970);
    }

    let welcome = "<strong>Hello and <span style='color: rgb(253, 16, 86);'>welcome</span></strong>";
    let name = "<strong>I'm <span style='color: rgb(253, 16, 86);'>Konstantinos Me</span>lissaratos</strong>";
    let age = "<strong><span style='color: rgb(253, 16, 86);'>" + calculateAge("10/16/2001") + "</span> years old</strong>";

    return (
        <Container style={{height: '100vh'}}>
            <Row className='justify-content-center align-items-center' style={{height: '100%'}}>
                <Col md={10} sm={12} className='justify-content-center' style={{textAlign: 'center'}}>
                    <TypeWriter
                        onInit={(typewriter) => {
                            typewriter.typeString(welcome)
                            .pauseFor(800)
                            .deleteAll()
                            .typeString(name)
                            .pauseFor(800)
                            .deleteChars(25)
                            .typeString(age)
                            .pauseFor(500)
                            .start()
                        }}
                        options={{
                            loop: true,
                            cursorClassName: 'Typewriter__cursor landing-page-typewriter',
                            wrapperClassName: 'Typewriter__wrapper landing-page-typewriter'
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;
