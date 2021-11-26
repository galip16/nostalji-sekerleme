import React from "react";
import "../styles/galery.css";
import { useHistory } from "react-router-dom";
import { Container, Col, Card, Row, Button } from "react-bootstrap";

import productData from "../productsInfo.json";

function Gallery({ setSelectedProduct }) {
  const history = useHistory();

  const handleProduct = (id) => {
    console.log(id);
    setSelectedProduct(id);
    // href="/galerySlider"
    history.replace("/galerySlider");
  };

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
                    onClick={() => handleProduct(product.id)}
                    variant="primary"
                    style={{ height: "10%" }}
                  >
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
