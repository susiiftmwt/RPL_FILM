import { Container, Row, Col } from 'react-bootstrap'
const Detaildune = () => {
    return (
        <Container fluid className='bg-dark py-5'>
        <Container>
        <Row className='mt-5'>
        <Col className='bg-light p-3 rounded'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                Perjalanan pahlawan yang penuh mitos dan emosional, Dune bercerita tentang Paul Atreides, seorang pemuda yang berbakat dan bertalenta yang lahir dalam takdir yang luar biasa, yang harus melakukan perjalanan ke planet paling berbahaya di alam semesta untuk memastikan masa depan keluarganya dan orang-orangnya. Ketika kekuatan jahat meledak menjadi konflik atas pasokan eksklusif sumber daya paling berharga di planet ini – komoditas yang mampu membuka potensi terbesar umat manusia – hanya mereka yang bisa menaklukkan ketakutan mereka yang akan bertahan.”
            </Col>
        </Row>
        </Container>
        </Container>
    )
}

export default Detaildune;