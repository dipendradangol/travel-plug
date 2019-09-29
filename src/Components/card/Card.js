import React from 'react';
import './Card.css';
import Card from 'react-bootstrap/Card'

const CardComponent = props => {
    return(
        <div style={{ textAlign: "center" }}>
            <Card style={{ width: '18rem', marginTop: '56px', display: 'inline-flex' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>  
            </Card>
        </div>
    );
}

export default CardComponent;
