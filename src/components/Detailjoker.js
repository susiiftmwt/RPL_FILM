import { Container, Row, Col } from 'react-bootstrap'
const Detailjoker = () => {
    return (
        <Container fluid className='bg-dark py-5'>
        <Container>
        <Row className='mt-5'>
        <Col className='bg-light p-3 rounded'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zAGVQLHvwOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                Joker menceritakan kisah Arthur Fleck yang bekerja sebagai tokoh badut dan stand up komedi. Arthur tinggal di apartemen kumuh bersama ibunya, Penny. Arthur tinggal di kota Gotham yang memperlihatkan ketidak adilan antara orang kaya dan miskin. Kota Gotham penuh kejahatan dan pengangguran.
            </Col>
        </Row>
        </Container>
        </Container>
    )
}

export default Detailjoker;