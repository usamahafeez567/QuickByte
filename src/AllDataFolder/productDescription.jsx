import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import productDetails from "./productDetails";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
} from "react-bootstrap";

export default function ProductDescription() {
  const { id } = useParams();
  //const product = productDetails.find((p) => p.id === id);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3} style={{ marginTop: "20px" }}>
          <ListGroup variant="flush">
            <ListGroupItem
              style={{ backgroundColor: "#063f71", color: "#56e39f" }}
            >
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem
              style={{ backgroundColor: "#063f71", color: "#56e39f" }}
            >
              Price : ${product.price}
            </ListGroupItem>
            <ListGroupItem
              style={{ backgroundColor: "#063f71", color: "#56e39f" }}
            >
              {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem style={{ marginTop: "20px" }}>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product.countInStock > 0 ? "In Stock " : "out of stock"}
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem style={{ marginTop: "20px" }}>
            <Button
              className="btn-custom btn-block"
              type="button"
              style={{
                color: "#56E39F",
                borderColor: "#56E39F",
                borderRadius: "20px",
              }}
            >
              Add to cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
      <style>
        {`
        .btn-custom{
          background-color: #063f71;
        }
        `}
      </style>
    </div>
  );
}
