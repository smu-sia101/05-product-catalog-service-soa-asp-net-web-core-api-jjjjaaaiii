import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: ""
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/Product");
    const data = await res.json();
    setProducts(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = form.id ? "PUT" : "POST";
    const url = form.id
      ? `http://localhost:5000/api/Product/${form.id}`
      : "http://localhost:5000/api/Product";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm({
      id: "",
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      imageUrl: ""
    });
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/Product/${id}`, {
      method: "DELETE"
    });
    fetchProducts();
  };

  return (
    <div className="container">
      <h1 className="title">Product Catalog</h1>
      <div className="form-card">
        <h2>{form.id ? "Update" : "Add"} Product</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="input" />
          <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="input" />
          <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required className="input" />
          <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required className="input" />
          <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="input" />
          <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} className="input" />
          <button type="submit" className="btn-submit">
            {form.id ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
