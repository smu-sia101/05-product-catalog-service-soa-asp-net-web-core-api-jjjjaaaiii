import React from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = () => axios.get(API_URL);
export const getProduct = (id) => axios.get(`${API_URL}/${id}`);
export const addProduct = (product) => axios.post(API_URL, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);
export const deleteProductById = (id) => axios.delete(`${API_URL}/${id}`);
export const deleteProduct = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
  };
  
let products = [
    {
      id: 1,
      name: "Adidas Ultraboost 22",
      description: "High-performance running shoes with responsive Boost cushioning.",
      price: 180.00,
      stock: 25,
      category: "Running",
      imageUrl: "https://assets.adidas.com/images/ultraboost22.jpg"
    },
    {
      id: 2,
      name: "Adidas Superstar",
      description: "Classic low-top sneakers with the iconic shell toe.",
      price: 95.00,
      stock: 40,
      category: "Casual",
      imageUrl: "https://assets.adidas.com/images/superstar.jpg"
    },
    {
      id: 3,
      name: "Adidas NMD_R1",
      description: "Modern streetwear sneakers with Boost comfort and a sleek design.",
      price: 140.00,
      stock: 18,
      category: "Lifestyle",
      imageUrl: "https://assets.adidas.com/images/nmd_r1.jpg"
    },
    {
      id: 4,
      name: "Adidas Forum Low",
      description: "Retro basketball-style shoes brought back for casual wear.",
      price: 100.00,
      stock: 30,
      category: "Casual",
      imageUrl: "https://assets.adidas.com/images/forumlow.jpg"
    },
    {
      id: 5,
      name: "Adidas Adizero Adios Pro 3",
      description: "Lightweight racing shoes designed for elite runners.",
      price: 250.00,
      stock: 10,
      category: "Performance",
      imageUrl: "https://assets.adidas.com/images/adiospro3.jpg"
    }
  ];
  
  export const getLocalProducts = async () => {
    return { data: products };
  };
  
  export const deleteLocalProduct = async (id) => {
      products = products.filter(p => p.id !== id);
  };
  