"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Smart Fitness Tracker",
    category: "Electronics",
    price: 89,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    title: "Minimal Wireless Earbuds",
    category: "Electronics",
    price: 59,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
  },
  {
    id: 3,
    title: "Modern Office Chair",
    category: "Furniture",
    price: 199,
    image: "https://images.unsplash.com/photo-1582582494700-1e52ec65f6b1",
  },
  {
    id: 4,
    title: "Stylish Backpack",
    category: "Fashion",
    price: 49,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
  {
    id: 5,
    title: "Premium Desk Lamp",
    category: "Furniture",
    price: 69,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25",
  },
  {
    id: 6,
    title: "Casual Sneakers",
    category: "Fashion",
    price: 79,
    image: "https://images.unsplash.com/photo-1528701800489-20be3c1e3cfa",
  },
];

const categories = ["All", "Electronics", "Fashion", "Furniture"];

export default function NewArrivals() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            New Arrivals
          </h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            Explore the latest products freshly added to our store.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`btn btn-sm ${
                active === cat ? "btn-warning" : "btn-outline"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all"
            >
              <figure className="relative h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <span className="badge badge-success absolute top-3 left-3">
                  New
                </span>
              </figure>

              <div className="card-body p-5">
                <h3 className="card-title text-base-content">
                  {product.title}
                </h3>

                <p className="text-base-content/60 text-sm">
                  Category: {product.category}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-base-content">
                    ${product.price}
                  </span>

                  <button className="btn btn-outline btn-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="btn btn-wide btn-outline">
            View All New Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
