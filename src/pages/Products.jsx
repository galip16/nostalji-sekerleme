import React from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
import "../styles/products.css";

function Products() {
  return (
    <div>
      <Container fluid>
        <Row className="m-5 justify-content-center">
          <Col lg={10}>
            <Card border="light">
              <Card.Body>
                <Card.Title className="mainHeader">
                  {" "}
                  <h1> ÜRÜNLER</h1>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="m-5 m-md-2 mb-md-4 m-lg-5 justify-content-center">
          <Col xs={12} md={6} lg={6} className="">
            <Row className="m-auto h-100 w-100 ">
              <Card className="" border="light" bg="light">
                <Col
                  md={12}
                  lg={12}
                  xl={9}
                  className=""
                  style={{ margin: "auto" }}
                >
                  <Card.Body
                    className="d-flex flex-column justify-content-center text-center text-md-left"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Card.Title className="productTitle">
                      {" "}
                      <h4>Pamuk Şeker</h4>
                    </Card.Title>
                    <Card.Text className="productDescribe  ">
                      Kendi imal ettiğimiz Pamuk Şeker makineleriyle tamamen
                      doğal şeker ve meyve özleri kullanarak üretim
                      gerçekleştirmekteyiz..
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card style={{ height: "100%", width: "100%" }}>
                <Card.Img
                  src="https://images.pexels.com/photos/4714301/pexels-photo-4714301.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  style={{ width: "100%", height: "100%" }}
                />
              </Card>
            </Row>
          </Col>
        </Row>

        <Row className="m-5 m-md-2 mb-md-4  m-lg-5  justify-content-center">
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card className="" border="light" bg="light">
                <Col
                  md={12}
                  lg={12}
                  xl={9}
                  className=""
                  style={{ margin: "auto" }}
                >
                  <Card.Body
                    className="d-flex flex-column justify-content-center text-center text-md-left"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Card.Title className="productTitle">
                      {" "}
                      <h4>Osmanlı Macunu</h4>
                    </Card.Title>
                    <Card.Text className="productDescribe ">
                      Evimizin mutfağında tamamen steril ortamda doğal şeker
                      kullanarak üretmekteyiz. Renklendirmeyi ise
                      müşterilerimizin sağlığını düşünerek tamamen meyve ve
                      sebzelerden yapmaktayız. Örneğin yeşil rengi verirken Kivi
                      kullanmak gibi..
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card style={{ height: "100%", width: "100%" }}>
                <Card.Img
                  src="https://www.peynircibaba.com/image/blog/mesir-macunu-faydalari-nelerdir.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </Card>
            </Row>
          </Col>
        </Row>

        <Row className="m-5 m-md-2 mb-md-4  m-lg-5  justify-content-center">
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card className="" border="light" bg="light">
                <Col
                  md={12}
                  lg={12}
                  xl={9}
                  className=""
                  style={{ margin: "auto" }}
                >
                  <Card.Body
                    className="d-flex flex-column justify-content-center text-center text-md-left"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Card.Title className="productTitle">
                      {" "}
                      <h4>Patlamis Misir</h4>
                    </Card.Title>
                    <Card.Text className="productDescribe ">
                      Halk arasında son zamanlarda Pop-Corn olarak tabir edilen
                      bu ürünümüzü yine özel ürettiğimiz makineler ile yağ-tuz
                      oranını sağlık standartları doğrultusunda ayarlayarak
                      üretmekteyiz.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card style={{ height: "100%", width: "100%" }}>
                <Card.Img
                  src="https://images.pexels.com/photos/5633527/pexels-photo-5633527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  style={{ width: "100%", height: "100%" }}
                />
              </Card>
            </Row>
          </Col>
        </Row>

        <Row className="m-5 m-md-2 mb-md-4 m-lg-5  justify-content-center">
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card className="" border="light" bg="light">
                <Col
                  md={12}
                  lg={12}
                  xl={9}
                  className=""
                  style={{ margin: "auto" }}
                >
                  <Card.Body
                    className="d-flex flex-column justify-content-center text-center text-md-left"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Card.Title className="productTitle">
                      <h4>Osmanlı Şerbeti</h4>{" "}
                    </Card.Title>
                    <Card.Text className="productDescribe">
                      Geleneksel Osmanlı Mutfağı'nın en klasik meşrubatlarından
                      olan Osmanlı Şerbeti'ni müşterilerimizin istekleri
                      doğrultusunda doğal baharatlar katarak hizmetinize
                      sunmaktayız.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card style={{ height: "100%", width: "100%" }}>
                <Card.Img
                  src="https://static.wixstatic.com/media/b4cff3_a24a9161aefa4995b4d22299a6aa6414~mv2.png/v1/fill/w_762,h_401,fp_0.50_0.50,lg_1,q_85/b4cff3_a24a9161aefa4995b4d22299a6aa6414~mv2.webp"
                  style={{ width: "100%", height: "100%" }}
                />
              </Card>
            </Row>
          </Col>
        </Row>

        <Row className="m-5 m-md-2 mb-md-4 m-lg-5 justify-content-center">
          <Col xs={12} md={6} lg={6} className="">
            <Row className="m-auto h-100 w-100 ">
              <Card className="" border="light" bg="light">
                <Col
                  md={12}
                  lg={12}
                  xl={9}
                  className=""
                  style={{ margin: "auto" }}
                >
                  <Card.Body
                    className="d-flex flex-column justify-content-center text-center text-md-left"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Card.Title className="productTitle">
                      {" "}
                      <h4>Salep</h4>
                    </Card.Title>
                    <Card.Text className="productDescribe  ">
                      Salep, kültürümüzün en önemli içeceklerindendir. Bu
                      lezzetler, Osmanlı'dan bugüne sokaklarda, el arabalarında,
                      omuzlarda satılarak insanlarla buluştu. Bu kadim hatırayı
                      doğal olarak üretip yine sizlere sunmaktayız..
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card style={{ height: "100%", width: "100%" }}>
                <Card.Img
                  src="https://www.griechische-rezepte.net/wp-content/uploads/2021/02/salep.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </Card>
            </Row>
          </Col>
        </Row>

        <Row className="m-5 m-md-2 mb-md-4 m-lg-5 justify-content-center">
          <Col xs={12} md={6} lg={6} className="">
            <Row className="m-auto h-100 w-100 ">
              <Card className="" border="light" bg="light">
                <Col
                  md={12}
                  lg={12}
                  xl={9}
                  className=""
                  style={{ margin: "auto" }}
                >
                  <Card.Body
                    className="d-flex flex-column justify-content-center text-center text-md-left"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Card.Title className="productTitle">
                      {" "}
                      <h4>Elma Şekeri</h4>
                    </Card.Title>
                    <Card.Text className="productDescribe  ">
                      Taze ve doğal elmalardan ürettiğimiz şekerlerimize
                      bayılacaksınız.. Tabiki katkı maddesiz..
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card style={{ height: "100%", width: "100%" }}>
                <Card.Img
                  src="https://static.wixstatic.com/media/b4cff3_cb83400a92ef4ad3afa9bc2444fca018~mv2.jpg/v1/fill/w_837,h_440,fp_0.50_0.50,lg_1,q_85/b4cff3_cb83400a92ef4ad3afa9bc2444fca018~mv2.webp"
                  style={{ width: "100%", height: "100%" }}
                />
              </Card>
            </Row>
          </Col>
        </Row>

        <Row className="m-5 m-md-2 mb-md-4 m-lg-5 justify-content-center">
          <Col xs={12} md={6} lg={6} className="">
            <Row className="m-auto h-100 w-100 ">
              <Card className="" border="light" bg="light">
                <Col
                  md={12}
                  lg={12}
                  xl={9}
                  className=""
                  style={{ margin: "auto" }}
                >
                  <Card.Body
                    className="d-flex flex-column justify-content-center text-center text-md-left"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Card.Title className="productTitle">
                      <h4>Talep ettiğiniz bir ürün mü var??</h4>
                    </Card.Title>
                    <Card.Text className="productDescribe  ">
                      Yukarıda listelenen ürünlerin haricinde, talep etmeniz
                      halinde bir çok hizmeti de sunabiliriz. (Kumda Kahve,
                      Smoothie, vb) Lütfen bizimle iletişime geçin..
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row className="m-auto h-100 w-100 ">
              <Card style={{ height: "100%", width: "100%" }}>
                <Card.Img
                  src="https://static.wixstatic.com/media/nsplsh_6fb9ef2958c24cbc9b5114f23fdd0d86~mv2.jpg/v1/fill/w_837,h_460,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/nsplsh_6fb9ef2958c24cbc9b5114f23fdd0d86~mv2.webp"
                  style={{ width: "100%", height: "100%" }}
                />
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
