import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://via.placeholder.com/150?text=${product.productName}`}
        alt={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Company: {product.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {product.availability}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
