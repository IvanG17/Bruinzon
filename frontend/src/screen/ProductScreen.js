import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from "../components/Rating"
import products from '../products'


const ProductScreen = ( {match} ) => {
    const { id } = useParams();
    const product = products.find(p => p._id === {id})
    const num = Number({id}) -1
    return <>
        
        <Link className = 'btn btn-dark my-3' to='/'>Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={products[id-1].image} alt={products[id-1].name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>{products[id-1].name}</h2>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        
        
    </>
}

export default ProductScreen