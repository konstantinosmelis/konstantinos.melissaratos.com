import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects({theme}) {
    const background = theme === 'dark' ? 'dark' : 'light';
    const text = theme === 'dark' ? 'light' : 'dark';

    return (
        <Container>
            <div className="title"><strong>Projects</strong></div>
            <Row style={{marginTop: "35px", marginBottom: "35px"}}>
                <Col sm={12} md={4} style={{marginTop: "10px", marginBottom: "10px"}}>
                    <Card bg={background} border={text}>
                        <Card.Body>
                            <Card.Title>
                                <img src={'/images/tree_' + (theme === 'light' ? 'black' : 'white') + '.png'} className="img-fluid company-logo card-logo" alt="huffmantree"/>
                                <strong>Huffman Compressor</strong>
                                <a href="https://github.com/konstantinosmelis/huffman_compressor" target="_blank" rel="noreferrer">
                                    <Button variant="outline-primary" style={{float: "right"}}>Source code</Button>
                                </a>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4} style={{marginTop: "10px", marginBottom: "10px"}}>
                    <Card bg={background} border={text}>
                        <Card.Body>
                            <Card.Title>
                                <img src="/images/bee.png" className="img-fluid company-logo card-logo" alt="superbee"/>
                                <strong>SuperBee</strong>
                                <a href="https://gitlab.com/jules_cassan/ter-s6-sociometrie-des-abeilles" target="_blank" rel="noreferrer">
                                    <Button variant="outline-primary" style={{float: "right"}}>Source code</Button>
                                </a>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4} style={{marginTop: "10px", marginBottom: "10px"}}>
                    <Card bg={background} border={text}>
                        <Card.Body>
                            <Card.Title>
                                <img src="/images/reddit.png" className="img-fluid company-logo card-logo" alt="redditscrapping"/>
                                <strong>Reddit Scrapping</strong>
                                <a href="https://github.com/konstantinosmelis/reddit_scrapping" target="_blank" rel="noreferrer">
                                    <Button variant="outline-primary" style={{float: "right"}}>Source code</Button>
                                </a>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4} style={{marginTop: "10px", marginBottom: "10px"}}>
                    <Card bg={background} border={text}>
                        <Card.Body>
                            <Card.Title>
                                <img src="/images/naturalevent.png" className="img-fluid company-logo card-logo" alt="naturaleventfinder"/>
                                <strong>Natural Event Finder</strong>
                                <a href="https://github.com/konstantinosmelis/natural-event-finder" target="_blank" rel="noreferrer">
                                    <Button variant="outline-primary" style={{float: "right"}}>Source code</Button>
                                </a>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4} style={{marginTop: "10px", marginBottom: "10px"}}>
                    <Card bg={background} border={text}>
                        <Card.Body>
                            <Card.Title>
                                <img src="/images/mysqlapi.png" className="img-fluid company-logo card-logo" alt="mysqljavaapi"/>
                                <strong>MySql java API</strong>
                                <a href="https://github.com/konstantinosmelis/java-sql-api" target="_blank" rel="noreferrer">
                                    <Button variant="outline-primary" style={{float: "right"}}>Source code</Button>
                                </a>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4} style={{marginTop: "10px", marginBottom: "10px"}}>
                    <Card bg={background} border={text}>
                        <Card.Body>
                            <Card.Title>
                                <img src="/images/image_processor.png" className="img-fluid company-logo card-logo" alt="mysqljavaapi"/>
                                <strong>Image Processing App</strong>
                                <a href="https://github.com/konstantinosmelis/projet-informatique" target="_blank" rel="noreferrer">
                                    <Button variant="outline-primary" style={{float: "right"}}>Source code</Button>
                                </a>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
