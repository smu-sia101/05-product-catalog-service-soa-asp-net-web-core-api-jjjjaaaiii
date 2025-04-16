import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import "./ProductList.css"; 

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchData();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 color="#black">Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
          <img src={product.imageUrl} alt={product.name} width="100" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <button onClick={() => onEdit(product)}> Edit</button>
          <button onClick={() => handleDelete(product.id)}>🗑 Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
