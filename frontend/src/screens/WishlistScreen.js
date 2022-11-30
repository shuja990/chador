import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import { removeFromWishlist } from "../actions/userActions";

const WishlistProducts = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(removeFromWishlist(id));
    }
  };
  const dispatch = useDispatch();

  return (
    <>
      <h2>Wishlist</h2>
      <Row>
        {userInfo?.wishlist ? (
          <>
            {userInfo?.wishlist?.map((product) => (
              <>
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                  <Button
                    className="btn btn-light my-3"
                    onClick={() => deleteHandler(product?._id)}
                  >
                    Remove From Wishlist
                  </Button>
                </Col>
              </>
            ))}
          </>
        ) : (
          <Message variant="primary">No Products added in wishlist</Message>
        )}
      </Row>
    </>
  );
};

export default WishlistProducts;
