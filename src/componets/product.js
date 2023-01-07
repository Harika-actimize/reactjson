import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = props => {
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.data.imagename}</Card.Title>
          <Card.Text>{props.data.price}</Card.Text>
          <div className="product-actions">
            <Button variant="primary">Buy Now</Button>
            <Button variant="secondary">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
