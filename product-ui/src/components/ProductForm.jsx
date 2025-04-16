import React, { useState, useEffect } from "react";
import { addProduct, updateProduct } from "../services/productService";
import "./ProductForm.css"; 

const initialState = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  category: "",
  imageUrl: "",
};

const ProductForm = ({ selected, refresh }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    setForm(selected || initialState);
  }, [selected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await updateProduct(form.id, form);
    } else {
      await addProduct(form);
    }
    setForm(initialState);
    refresh();
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{form.id ? "Update" : "Add"} Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="form-input"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="form-input"
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-button">
          {form.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
