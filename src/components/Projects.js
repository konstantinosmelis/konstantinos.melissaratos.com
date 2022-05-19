import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Projects() {
    return (
        <Container style={{height: "60%"}}>
            <div className="title"><strong>Projects</strong></div>
            <Row style={{marginTop: "35px", marginBottom: "35px"}}>
                <Col sm={12} md={4}>
                    <Card bg='dark' border='light'>
                        <Card.Body>
                            <Card.Title>
                                <img src="/images/tree.png" style={{width: "30px", height: "30px"}} className="img-fluid company-logo" alt="huffmantree"/>
                                <strong style={{float: "right"}}>Huffman Compressor</strong>
                            </Card.Title>
                            <Card.Text>
                                File compressor by applying Huffman coding, a lossless data compression algorithm.
                            </Card.Text>
                            <a href="https://www.google.com/" target="_blank">
                                <Button variant="outline-primary" style={{float: "right"}}>Source code</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card bg='dark' border='light'>
                        <Card.Body>
                            <Card.Title>
                                <img src="/images/museum.png" style={{width: "30px", height: "30px"}} className="img-fluid company-logo" alt="museumdb"/>
                                <strong style={{float: "right"}}>Museum DB</strong>
                            </Card.Title>
                            <Card.Text>
                                MySql database containing simple functions, procedures and triggers.
                            </Card.Text>
                            <a href="https://www.google.com/" target="_blank">
                                <Button variant="outline-primary" style={{float: "right"}}>Source code</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card bg='dark' border='light'>
                        <Card.Body>
                            <Card.Title>
                                <img src="/images/bee.png" style={{width: "30px", height: "30px"}} className="img-fluid company-logo" alt="superbee"/>
                                <strong style={{float: "right"}}>SuperBee</strong>
                            </Card.Title>
                            <Card.Text>
                                Python program for classifying bee and cell images.
                            </Card.Text>
                            <a href="https://www.google.com/" target="_blank">
                                <Button variant="outline-primary" style={{float: "right"}}>Source code</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;