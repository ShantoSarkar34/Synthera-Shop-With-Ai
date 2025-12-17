"use client";

import { motion } from "framer-motion";
const products = [
  {
    id: 1,
    title: "Wireless Noise Cancelling Headphone",
    price: 129,
    oldPrice: 159,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
  {
    id: 2,
    title: "Smart Watch Series Pro",
    price: 99,
    oldPrice: 129,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    title: "Portable Bluetooth Speaker",
    price: 79,
    oldPrice: 99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
  {
    id: 4,
    title: "Premium Gaming Mouse",
    price: 49,
    oldPrice: 69,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-base-200">
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
            Featured & Best Sellers
          </h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            Most popular products loved by customers and optimized for smart
            shopping.
          </p>
        </motion.div>

        {/* Products */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <figure className="relative h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <span className="badge badge-warning absolute top-3 left-3">
                  Best Seller
                </span>
              </figure>

              {/* Body */}
              <div className="card-body p-5">
                <h3 className="card-title text-base-content line-clamp-2">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-warning">⭐ {product.rating}</span>
                  <span className="text-base-content/60">(120+ reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-base-content">
                    ${product.price}
                  </span>
                  <span className="text-sm line-through text-base-content/50">
                    ${product.oldPrice}
                  </span>
                </div>

                {/* Actions */}
                <div className="card-actions mt-4 flex gap-3">
                  <button className="btn btn-warning flex-1">
                    Add to Cart
                  </button>
                  <button className="btn btn-outline btn-square">❤</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="btn btn-outline btn-wide">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
