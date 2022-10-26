import { Container, Row, Col } from 'react-bootstrap'
const Detailsuperman= () => {
    return (
        <Container fluid className='bg-dark py-5'>
        <Container>
        <Row className='mt-5'>
        <Col className='bg-light p-3 rounded'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bRqAUqAFhNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
        <Col className='text-light'>
            A mentally troubled stand-up comedian embraks on downward spiral that leads to the bone
            <hr />
            Director todd Phillips
            <hr />
            Writers Todd PhillipsScot SilverBob Kane(based on characters created by)
            <hr />
            Stars joaquin phoenixRobert De NiroZazie Beetz
            <hr />
        </Col>
        </Row>
        <Row>
            <Col className='text-light'>
            <h3 className='mt-5'>Sinopsis</h3>
                <hr />
                This movie begins on Krypton, where Superman's father sends him off to Earth as a young child. He grows up to be a perfectly normal newspaper reporter named Clark Kent. At least, he appears perfectly normal, until he transforms into Superman - flying around with his underpants over his tights, saving the day.
            </Col>
        </Row>
        </Container>
        </Container>
    )
}

export default Detailsuperman;