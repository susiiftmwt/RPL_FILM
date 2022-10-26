import { Container, Row, Col, Button } from 'react-bootstrap';
import Dune from '.././assets/images/trending/dune.jpg';
import Everything from '.././assets/images/trending/everything.jpg';
import Infinite from '.././assets/images/trending/infinite.jpg';
import Joker from '.././assets/images/trending/joker.jpg';
import Lightyear from '.././assets/images/trending/lightyear.jpg';
import Morbius from '.././assets/images/trending/morbius.jpg';
import Card from './Cardfilm';
const Trending = () => {
    return (
        <div className='trending pt-5' id="trending">
            <Container className='py-3 text-center'>
                <h1 className='text-light'>Trending</h1>
                <Row className='mb-3'>
                    <Col>
                      <Card gambar={Infinite} judul="Infinite" />
                    </Col>
                    <Col>
                    <Card gambar={Dune} judul="Dune" />
                    </Col>
                    <Col>
                    <Card gambar={Joker} judul="Joker" />            
                    </Col>
                </Row> 
                <Row className='mb-4'>
                    <Col>
                      <Card gambar={Everything} judul="Everything" />
                    </Col>
                    <Col>
                    <Card gambar={Lightyear} judul="Lightyear" />
                    </Col>
                    <Col>
                    <Card gambar={Morbius} judul="Morbius" />            
                    </Col>
                </Row>                        
            </Container>
        </div>
    )
}

export default Trending;