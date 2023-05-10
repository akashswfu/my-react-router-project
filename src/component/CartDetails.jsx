import React from "react";
import "./CartDetails.css";

// import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
// import { faTrashAlt } from "react-icons/fa";

const CartDetails = (props) => {
  const {
    image,
    title,
    desc,
    authors,
    publisher,
    year,
    rating,
    url,
    price,
    isbn13,
  } = props.books;
  console.log(props.books);

  return (
    <div className="flex justify-center">
      <div>
        <div className="review-item">
          <img src={image} alt="no" />
          <div className="review-details">
            <p className="product-title ">{title}</p>
            <p className="font-bold">
              Author:{" "}
              <span className="orange-text ">
                {authors.split(", ").slice(0, 2).join(", ")}
              </span>
            </p>
            <p className="font-bold">
              Price: <span className="orange-text">{price}</span>
            </p>
          </div>
          <div className="flex justify-center">
            <button className="btn-delete">
              <FaTrashAlt className="delete-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
