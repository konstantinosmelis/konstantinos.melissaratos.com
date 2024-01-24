import { Container, Row, Col } from 'react-bootstrap';

function Education({theme}) {
    return (
        <Container>
            <div className="title"><strong>Education</strong></div>
            <Row style={{marginTop: "35px", marginBottom: "35px"}}>
                <Col sm={12} md={6} style={{marginTop: "10px", marginBottom: "10px"}}>
                    <Row>
                        <Col sm={2} className="d-none d-md-block">
                            <img style={{width: "50px", height: "50px", float: "right"}} src="/images/um_logo.png" className="img-fluid company-logo" alt="umontpellier"/>
                        </Col>
                        <Col sm={10}>
                            <h5 style={{fontSize: "13pt"}}>Faculté des Sciences - Univesité de Montpellier</h5>
                            <h6 style={{fontSize: "12pt"}}>Bachelor's degree - Computer Science</h6>
                            <h6 className="showTime" style={{fontFamily: "farid"}}>2019 - 2022</h6>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6} style={{marginTop: "10px", marginBottom: "10px"}}>
                    <Row>
                        <Col sm={2} className="d-none d-md-block">
                            <img style={{width: "50px", height: "50px", float: "right"}} src={'/images/ut_logo_' + (theme === 'light' ? 'black' : 'white') + '.png'} className="img-fluid company-logo" alt="utoulouse3"/>
                        </Col>
                        <Col sm={10}>
                            <h5 style={{fontSize: "13pt"}}>Faculté des Sciences et Ingénieurie - Univesité de Toulouse III</h5>
                            <h6 style={{fontSize: "12pt"}}>Master's degree - Signal and image processing and machine learning</h6>
                            <h6 className="showTime" style={{fontFamily: "farid"}}>2022 - present</h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Education;
