import React from "react";
import "../styles/galery.css";
import { Container, Col, Card, Row, Button } from "react-bootstrap";

import productData from "../productsInfo.json";

function Gallery() {
  return (
    <div className="photos__container">
      <Container fluid className="product__item">
        <Row>
          {productData.slice(0, -1).map((product, i) => {
            return (
              <Col xs={12} lg={6} xl={4} className="p-2">
                <Card
                  className="mx-auto"
                  style={{ height: "400px", maxWidth: "500px" }}
                >
                  <Card.Img
                    variant="top"
                    src={product.imgUrl}
                    style={{ height: "90%" }}
                  />

                  <Button
                    href="/galerySlider"
                    variant="primary"
                    style={{ height: "10%" }}
                  >
                    {" "}
                    {product.name}
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
