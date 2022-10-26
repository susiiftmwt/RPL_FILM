import { Container, Row, Col } from "react-bootstrap"
import Logo from '.././assets/images/bg/R.gif';
import './style.css';
const Footer = () => {
    return (
        <div className="bg-dark text-muted py-5 footer">
            <Container>
                <Row>
                    <Col className="text-center">
                        <img src={Logo} alt="Cinema21" width={"1000px"} />
                        <p>Copyright &copy; Susi Fatmawati - 2022</p>
                    </Col>
                </Row>
            </Container>
            
             
        </div>

    )
}

export default Footer;