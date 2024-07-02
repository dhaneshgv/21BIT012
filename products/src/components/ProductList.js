import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper, Button, Box } from '@mui/material';
import ProductCard from './ProductCard';
import Filter from './Filter';
import Pagination from './Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([
    "Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"
  ]);
  const [companies, setCompanies] = useState([
    "AMZ", "FLP", "SNP", "MYN", "AZO"
  ]);
  const [filters, setFilters] = useState({
    category: "",
    company: "",
    minPrice: 0,
    maxPrice: 10000
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    const { category, company, minPrice, maxPrice } = filters;

    if (!category || !company) {
      return;
    }

    try {
      const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products`, {
        params: { top: 10, minPrice, maxPrice }
      });

      const productsWithIds = response.data.map((product, index) => ({ ...product, id: `${product.productName}-${index}` }));
      setProducts(productsWithIds);
      setFilteredProducts(productsWithIds);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Product List
      </Typography>
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Filter
          categories={categories}
          companies={companies}
          applyFilters={applyFilters}
        />
      </Paper>
      <Grid container spacing={3}>
        {currentProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box mt={4}>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={handlePageChange}
        />
      </Box>
    </Container>
  );
};

export default ProductList;
