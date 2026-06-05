import { motion } from "framer-motion";

import CategoryCard from "./CategoryCard";

import { categories } from "../data/menuData";

const MenuSection = () => {
  return (
    <section
  id="menu"
  className="min-h-screen bg-primary px-6 py-24"
>

  <div className="max-w-7xl mx-auto">

  {/* Heading */}
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
          Our Menu
        </h1>

        <p className="text-cream/70 text-sm sm:text-base md:text-lg">
          Crafted with elegance & flavor
        </p>
      </motion.div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <CategoryCard
              title={category.title}
            />
          </motion.div>
        ))}

      </div>
      </div>
    </section>
  );
};

export default MenuSection;