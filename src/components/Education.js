import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Education() {
    return (
        <Container style={{height: "60%"}}>
            <div className="title"><strong>Education</strong></div>
            <Row style={{marginTop: "35px", marginBottom: "35px"}}>
                <Col sm={12} md={6}>
                    <Row>
                        <Col sm={2} className="d-none d-md-block">
                            <img style={{width: "50px", height: "50px", float: "right"}} src="/images/um_logo.png" className="img-fluid company-logo" alt="umontpellier"/>
                        </Col>
                        <Col sm={10}>
                            <h5 style={{fontFamily: "farid"}}>Faculté des Sciences - Univesité de Montpellier</h5>
                            <h6>Bachelor's degree - Computer Science</h6>
                            <h6 className="showTime" style={{fontFamily: "farid"}}>2019 - 2022</h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Education;