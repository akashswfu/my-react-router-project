import React, { useEffect, useState } from "react";
import CartDetails from "./CartDetails";

const Cart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const bookStore = JSON.parse(localStorage.getItem("book-store"));
    setData(bookStore);
  }, []);

  return (
    <div className="my-container">
      {data?.map((books) => (
        <CartDetails key={books.isbn13} books={books}></CartDetails>
      ))}
    </div>
  );
};

export default Cart;
