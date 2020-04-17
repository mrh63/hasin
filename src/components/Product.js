import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

const Product = (props) => {

    const products = useSelector(state => state.products);
    const product = products.find(product => product.title === props.match.params.title);
    if (!product) {

    }
    const {
        title = 'product not found',
        image = '/images/no-image.jpg',
        description = 'product not found'
    } = product || {};
    
    return (
        <div className="product">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg="8">
                        <img width="100%" src={image} alt={title} />
                    </Col>
                </Row>
                <Row className="mt-5 d-flex justify-content-center">
                    <Col lg="8">
                        <p>{description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product;