import React from "react";
import PropTypes from "prop-types";

const Painting = ({ author, price, quantity }) => (
  <div>
    Card component of paint
    <p>{author}</p>
    <p>{price}</p>
    <p>доступность {quantity < 15 ? "not much" : "enouf"}</p>
  </div>
);

Painting.defaultProps = {
  author: "OLOLOLO",
  price: 1000,
};

Painting.propTypes = {
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};

export default Painting;
