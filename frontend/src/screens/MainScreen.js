import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listTopProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";

const MainScreen = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <div>
              <div className="hero">
                <div className="hero-img">
                  <img
                    src="https://i.postimg.cc/kMNz5grj/flower.png"
                    alt="Pixel Skincare"
                  />
                </div>
                <div className="hero-text">
                  <h1>
                    Heading
                    <br /> Heading Extended
                  </h1>
                  <a href="#featured" className="btn">
                    Explore
                  </a>
                </div>
              </div>
              <section id="featured">
                <div className="title title-left">
                  <span className="line" />
                  <h3>New Friend!</h3>
                </div>
                <div className="wrapper">
                  <div className="image">
                    <img
                      src="https://i.postimg.cc/DyM1SgNb/flower-copy.png"
                      alt="Pixel Facial Cream"
                    />
                  </div>
                  <div className="text">
                    <h2>Heading</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#" className="btn">
                      Details
                    </a>
                  </div>
                </div>
              </section>
              <section id="collections">
                <div className="title title-right">
                  <span className="line line-right" />
                  <h3>Collections</h3>
                </div>
                <div className="wrapper">
                  <a className="box box1" href="#">
                    <h4>Silk</h4>
                    <div className="box-overlay" />
                  </a>
                  <a className="box box2" href="#">
                    <h4>Georgette</h4>
                    <div className="box-overlay" />
                  </a>
                  <a className="box box3" href="#">
                    <h4>Cashmere</h4>
                    <div className="box-overlay" />
                  </a>
                </div>
              </section>
            </div>
          </Row>
          <h1>Featured Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default MainScreen;
