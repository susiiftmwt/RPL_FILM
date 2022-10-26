import { Container, Row, Col } from 'react-bootstrap'
const Detailantman= () => {
    return (
        <Container fluid className='bg-dark py-5'>
        <Container>
        <Row className='mt-5'>
        <Col className='bg-light p-3 rounded'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Fyt9JLKduDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                ilmuwan Hank Pym mengundurkan diri dari S.H.I.E.L.D. setelah menemukan bahwa organisasi ini berusaha meniru teknologi penyusutan Ant-Man. Pym percaya bahwa teknologi berbahaya dan bersumpah untuk menekan kemunculannya.
            </Col>
        </Row>
        </Container>
        </Container>
    )
}

export default Detailantman;