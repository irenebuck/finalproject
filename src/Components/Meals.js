import React from 'react';
import ShoppingList from './ShoppingList';
import NewItemForm from './NewItemForm';
import Header from './Header';
import Navi from './Navi';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer'

export default function Meals() {
 
    return (    
        <div className='center'>
            <Header />
            <Navi />
            <Container className='days' fluid >
                <Row className='flex'>
                    <Card style={{ width: '13rem' }} >
                        <Card.Body>
                            <Card.Title className='cardTitle'>Monday</Card.Title>
                            <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Main</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Side</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className='cardTitle'>Tuesday</Card.Title>
                            <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Main</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Side</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className='cardTitle'>Wednesday</Card.Title>
                            <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Main</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Side</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className='cardTitle'>Thursday</Card.Title>
                            <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Main</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Side</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className='cardTitle'>Friday</Card.Title>
                            <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Main</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Side</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className='cardTitle'>Saturday</Card.Title>
                            <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Main</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Side</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className='cardTitle'>Sunday</Card.Title>
                            <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Main</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <br></br>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Side</InputGroup.Text>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>

            <Container className='flex'>
                <Row>
                    <Col>
                        <Card style={{ width: '25rem' }}>
                            <Card.Body>
                                <Card.Title>Add Items To Shopping List</Card.Title>
                                <NewItemForm />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '25rem' }}>
                            <Card.Body>
                                <Card.Title>Shopping List</Card.Title>
                                <ShoppingList />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
