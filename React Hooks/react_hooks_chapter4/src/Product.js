import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = (props) => {
    return (
        <div>
            <Card>
                <img
                    Beginning React with Hooks
                    width={64}
                    height={64}
                    className="mr-3"
                    src={props.data.imageUrl}
                    alt="Image"
                />
                <Card.Body>
                    <h5>{props.data.productName}</h5>
                    {props.data.releasedDate}
                    <Rating
                        rating={props.data.rating}
                        numOfReviews={props.data.numOfReviews}
                    />
                    <p>{props.data.description}</p>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Product;
