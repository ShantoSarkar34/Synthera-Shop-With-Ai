"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const recommendedProducts = [
  {
    id: 1,
    title: "Smart AI Speaker",
    price: 129,
    oldPrice: 159,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    recommendation: "Recommended based on your interests",
  },
  {
    id: 2,
    title: "AI-Powered Robot Vacuum",
    price: 299,
    oldPrice: 349,
    category: "Home",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    recommendation: "Customers with similar tastes bought this",
  },
  {
    id: 3,
    title: "Smart Watch with AI Fitness Coach",
    price: 99,
    oldPrice: 129,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    recommendation: "AI suggests this for your lifestyle",
  },
  {
    id: 4,
    title: "AI Light Therapy Lamp",
    price: 69,
    oldPrice: 89,
    category: "Health",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    recommendation: "Based on your browsing behavior",
  },
];

export default function AiRecommendations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProduct = () => {
    setActiveIndex((prev) => (prev + 1) % recommendedProducts.length);
  };

  const prevProduct = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + recommendedProducts.length) % recommendedProducts.length
    );
  };

  const product = recommendedProducts[activeIndex];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            AI-Powered Recommendations
          </h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            Products selected for you using intelligent AI insights.
          </p>
        </motion.div>

        {/* Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-base-100 shadow-xl rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Image */}
          <div className="relative w-full md:w-1/3 h-64 md:h-80 rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="badge badge-warning mb-2">{product.category}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-base-content mt-2">
              {product.title}
            </h3>
            <p className="text-base-content/70 mt-2">
              {product.recommendation}
            </p>

            <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
              <span className="text-xl font-bold text-base-content">
                ${product.price}
              </span>
              <span className="line-through text-base-content/50">
                ${product.oldPrice}
              </span>
            </div>

            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              <button className="btn btn-warning">Add to Cart</button>
              <button className="btn btn-outline">❤</button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-4 right-4 flex gap-2 md:static md:mt-6">
            <button
              onClick={prevProduct}
              className="btn btn-circle btn-sm btn-outline"
            >
              ◀
            </button>
            <button
              onClick={nextProduct}
              className="btn btn-circle btn-sm btn-outline"
            >
              ▶
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
