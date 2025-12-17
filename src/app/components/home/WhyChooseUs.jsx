"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Smart Shopping Experience",
    description:
      "Our platform uses intelligent systems to help you discover the right products faster.",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Fast & Reliable Delivery",
    description:
      "Quick delivery with real-time tracking, ensuring your products arrive safely.",
    icon: "🚚",
  },
  {
    id: 3,
    title: "Secure Payments",
    description:
      "Multiple trusted payment methods with advanced security protection.",
    icon: "🔒",
  },
  {
    id: 4,
    title: "Easy Returns",
    description:
      "Hassle-free return and refund policy for a smooth shopping experience.",
    icon: "🔄",
  },
  {
    id: 5,
    title: "24/7 Customer Support",
    description:
      "Instant support through chat and smart assistance whenever you need help.",
    icon: "💬",
  },
  {
    id: 6,
    title: "Trusted by Customers",
    description:
      "Thousands of satisfied customers shop with us and recommend our service.",
    icon: "⭐",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Why Choose Us
          </h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            We combine smart technology with great service to give you the best
            shopping experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="card bg-base-200 shadow-md hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>

                <h3 className="card-title text-base-content">
                  {feature.title}
                </h3>

                <p className="text-base-content/70 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
