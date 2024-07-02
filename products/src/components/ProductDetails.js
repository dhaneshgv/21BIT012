import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    // Fetch product details from the API using the product id
    // Example: await axios.get(`API_ENDPOINT/${id}`);
    // Set product to state
  };

  return (
    <div>
      {product ? (
        <div className="product-details">
          <h1>{product.productName}</h1>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fdifferent-products&psig=AOvVaw30tOK1WcB-d1w5ktmVGXNz&ust=1719982597824000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCY1ObIh4cDFQAAAAAdAAAAABAE" alt={product.productName} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
