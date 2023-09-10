import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Pizza() {
  return (
    <div>
       <div className='container'>
        <div className='row'>
            <div className='col-md-4 col-lg-4'> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Delicious Pizza</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
    {/* card one end */}
    <div className='col-md-4 col-lg-4'> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public.js/images/f1.png" />
      <Card.Body>
        <Card.Title>Delicious Burger</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
    {/* card 2 END */}
    <div className='col-md-4 col-lg-4'> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Delicious Pizza</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
        </div>
        <Container/>
    </div>
  )
}

export default Pizza;
