"use client";

import { motion } from "framer-motion";

export default function NewsletterCTA() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-r from-warning/90 to-warning shadow-xl"
        >
          {/* Decorative blur */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Get 10% Off Your First Order
            </h2>

            <p className="mt-4 text-black/80 max-w-xl mx-auto">
              Subscribe to our newsletter and be the first to receive exclusive
              deals, new arrivals, and smart shopping tips.
            </p>

            {/* Form */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full bg-white text-black placeholder:text-gray-500"
              />
              <button className="btn btn-neutral">Subscribe</button>
            </div>

            <p className="mt-4 text-sm text-black/70">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
