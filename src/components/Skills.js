import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';

function Skills() {
    return (
        <Container style={{height: "60%"}}>
            <div className="title"><strong>Skills</strong></div>
            <Row>
                <Col sm={12} style={{marginTop: "35px", marginBottom: "35px"}}>
                    <div className="skill-item-name" style={{color: "rgb(45, 75, 89)"}}><strong>LANGUAGES</strong></div>
                    <ProgressBar style={{width: "100%", backgroundColor: "rgb(45, 75, 89)", marginTop: "10px", height: "3px"}}></ProgressBar>
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">GREEK</div>
                    <Badge bg="danger" text='dark' style={{float: "right", fontFamily: "farid"}}>NATIVE LANGUAGE</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">FRENCH</div>
                    <Badge bg="danger" text='dark' style={{float: "right", fontFamily: "farid"}}>SECOND LANGUAGE</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">ENGLISH</div>
                    <Badge bg="warning" text='dark' style={{float: "right", fontFamily: "farid"}}>FLUENT</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">SPANISH</div>
                    <Badge bg="light" text='dark' style={{float: "right", fontFamily: "farid"}}>ITERMEDIATE</Badge>{' '}
                </Col>
            </Row>

            <Row>
                <Col sm={12} style={{marginTop: "35px", marginBottom: "35px"}}>
                    <div className="skill-item-name" style={{color: "rgb(45, 75, 89)"}}><strong>PROGRAMMING LANGUAGES</strong></div>
                    <ProgressBar style={{width: "100%", backgroundColor: "rgb(45, 75, 89)", marginTop: "10px", height: "3px"}}></ProgressBar>
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">PYTHON</div>
                    <Badge bg="danger" text='dark' style={{float: "right", fontFamily: "farid"}}>SKILLED</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">JAVA</div>
                    <Badge bg="warning" text='dark' style={{float: "right", fontFamily: "farid"}}>ITERMEDIATE</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">PHP</div>
                    <Badge bg="warning" text='dark' style={{float: "right", fontFamily: "farid"}}>ITERMEDIATE</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">C/C++</div>
                    <Badge bg="warning" text='dark' style={{float: "right", fontFamily: "farid"}}>ITERMEDIATE</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">RUBY</div>
                    <Badge bg="light" text='dark' style={{float: "right", fontFamily: "farid"}}>BEGINER</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">JAVASCRIPT</div>
                    <Badge bg="light" text='dark' style={{float: "right", fontFamily: "farid"}}>BEGINER</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">RUST</div>
                    <Badge bg="light" text='dark' style={{float: "right", fontFamily: "farid"}}>BEGINER</Badge>{' '}
                </Col>
            </Row>

            <Row>
                <Col sm={12} style={{marginTop: "35px", marginBottom: "35px"}}>
                    <div className="skill-item-name" style={{color: "rgb(45, 75, 89)"}}><strong>OTHERS</strong></div>
                    <div className="progress" style={{marginTop: "10px", height: "2px"}}>
                        <div className="progress-bar" style={{width: "100%", backgroundColor: "rgb(45, 75, 89)"}}></div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">RELATIONNAL DATABASES</div>
                    <Badge bg="danger" text='dark' style={{float: "right", fontFamily: "farid"}}>SKILLED</Badge>{' '}
                </Col>
                <Col sm={12} md={6} lg={4} style={{marginBottom: "7px"}}>
                    <div className="skill-item-name">REACT JS</div>
                    <Badge bg="light" text='dark' style={{float: "right", fontFamily: "farid"}}>BEGINER</Badge>{' '}
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;