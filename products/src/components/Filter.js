import React, { useState } from 'react';
import { Grid, MenuItem, Select, FormControl, InputLabel, TextField, Button } from '@mui/material';

const Filter = ({ categories, companies, applyFilters }) => {
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApplyFilters = () => {
    applyFilters({
      category,
      company,
      minPrice,
      maxPrice
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value=""><em>All Categories</em></MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth>
          <InputLabel>Company</InputLabel>
          <Select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <MenuItem value=""><em>All Companies</em></MenuItem>
            {companies.map((comp) => (
              <MenuItem key={comp} value={comp}>{comp}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Min Price"
          type="number"
          fullWidth
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Max Price"
          type="number"
          fullWidth
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
