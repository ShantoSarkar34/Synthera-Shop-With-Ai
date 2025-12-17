"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Verified Buyer",
    review:
      "The product quality is amazing and the AI suggestions really helped me choose the right item. Delivery was fast!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Regular Customer",
    review:
      "I love the clean UI and how easy it is to find products. Definitely one of the best online stores I’ve used.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Imran Hossain",
    role: "Verified Buyer",
    review:
      "Checkout was smooth and secure. The chatbot answered my questions instantly. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];

export default function Testimonials() {
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
            What Our Customers Say
          </h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            Real feedback from people who love shopping with us.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="card bg-base-200 shadow-md hover:shadow-xl transition-all"
            >
              <div className="card-body">
                {/* Rating */}
                <div className="flex gap-1 text-warning text-sm">
                  {"⭐".repeat(item.rating)}
                </div>

                {/* Review */}
                <p className="text-base-content/80 mt-2">
                  “{item.review}”
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-5">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base-content">
                      {item.name}
                    </h4>
                    <span className="text-sm text-base-content/60">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
