'use strict';

import Product from './components/Product.js';
import { productsContainer } from './dom.js';
import { clear, render } from './helpers.js';
import LoadingProduct from './loadingProduct.js';

const url = 'https://64a735f2096b3f0fcc812ad9.mockapi.io';

const getProducts = async () => {
  try {
    const res = await fetch(`${url}/products`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

const loadingProducts = Array.from({ length: 20 }, (_, i) => i + 1)
  .map((_) => LoadingProduct())
  .join('');
render(loadingProducts, productsContainer);

getProducts().then((products) => {
  const Products = products.map((product) => Product(product)).join('');
  clear(productsContainer);
  render(Products, productsContainer);
});
