// routes/productRoutes.js
const express = require("express");
const admin = require("../config/firebase");  // Import Firebase Admin SDK from config
const db = admin.firestore();

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const snapshot = await db.collection("products").get();
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
