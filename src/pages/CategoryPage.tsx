
import { useNavigate, useParams } from "react-router-dom";
import { categories } from "../data/menuData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CategoryPage = () => {

  const navigate = useNavigate();

  const { title } = useParams();

  const [activeSection, setActiveSection] =
    useState("");

  const category = categories.find(
    (cat) =>
      cat.title.toLowerCase() === title
  );

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [title]);

  useEffect(() => {

    const handleScroll = () => {

      category?.subCategories.forEach((sub) => {

        const element =
          document.getElementById(
            sub.title.replace(/\s+/g, "-")
          );

        if (element) {

          const rect =
            element.getBoundingClientRect();

          if (
            rect.top <= 200 &&
            rect.bottom >= 200
          ) {
            setActiveSection(sub.title);
          }
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, [category]);

  if (!category) {
    return (
      <div className="h-screen flex items-center justify-center bg-primary text-cream">
        Category Not Found
      </div>
    );
  }

  return (

    <section className="relative min-h-screen bg-primary text-cream overflow-hidden">

      {/* Glow Top */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0
          left-0
          w-[220px]
          h-[220px]
          sm:w-[400px]
          sm:h-[400px]
          bg-accent/20
          blur-[120px]
          rounded-full
        "
      />

      {/* Glow Bottom */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          w-[220px]
          h-[220px]
          sm:w-[400px]
          sm:h-[400px]
          bg-[#F5DAA7]/10
          blur-[120px]
          rounded-full
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="relative z-40 backdrop-blur-2xl bg-primary/70 border-b border-white/10">

          <div className="w-full px-4 sm:px-6 py-4 sm:py-5">

            {/* TOP NAV */}
            <div
              className="
                flex
                items-center
                justify-start
                gap-2
                sm:gap-3
                overflow-x-auto
                snap-x
                snap-mandatory
                scrollbar-hide
              "
            >

              {/* BACK */}
              <button
                onClick={() => navigate("/")}
                className="
                  snap-start
                  whitespace-nowrap
                  px-4
                  py-2
                  rounded-full
                  bg-accent
                  text-cream
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                "
              >
                ← Back
              </button>

              {/* MAIN CATEGORIES */}
              {categories.map((item) => (

                <button
                  key={item.id}
                  onClick={() =>
                    navigate(
                      `/category/${item.title.toLowerCase()}`
                    )
                  }
                  className={`
                    snap-start
                    whitespace-nowrap
                    px-4 sm:px-5
                    py-2
                    rounded-full
                    text-sm
                    transition-all
                    duration-300
                    ${
                      item.title === category.title
                        ? "bg-accent text-cream"
                        : "bg-white/10 text-cream/70"
                    }
                  `}
                >
                  {item.title}
                </button>

              ))}

            </div>

            {/* TITLE */}
            <h1
              className="
                text-center
                mt-8
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-black
                tracking-[0.15em]
                text-[#F5DAA7]
                font-['Playfair_Display']
              "
            >
              {category.title}
            </h1>

          </div>

        </div>

        {/* SUBCATEGORY NAV */}
        <div
          className="
            sticky
            top-0
            z-50
            py-2.5
            sm:py-4
            backdrop-blur-xl
            bg-primary/80
            border-y
            border-white/10
          "
        >

          <div
            className="
              flex
              items-center
              justify-start
              gap-2
              sm:gap-3
              overflow-x-auto
              snap-x
              snap-mandatory
              px-4 sm:px-6
              scrollbar-hide
            "
          >

            {category.subCategories.map((sub, index) => (

              <a
                key={index}
                href={`#${sub.title.replace(/\s+/g, "-")}`}
                className={`
                  snap-start
                  whitespace-nowrap
                  px-3 sm:px-4
                  py-2
                  rounded-full
                  text-sm
                  transition-all
                  duration-300
                  ${
                    activeSection === sub.title
                      ? "bg-accent text-cream shadow-lg"
                      : "bg-white/10 text-cream/70"
                  }
                `}
              >
                {sub.title}
              </a>

            ))}

          </div>

        </div>

        {/* MENU LIST */}
        <div className="relative z-10 w-full px-4 sm:px-5 pt-10 pb-24">

          {category.subCategories.map((sub, index) => (

            <motion.div
              key={index}
              id={sub.title.replace(/\s+/g, "-")}
              className="
                mb-20
                scroll-mt-44
                sm:scroll-mt-48
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              {/* SUBCATEGORY TITLE */}
              <h2
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  tracking-[0.2em]
                  uppercase
                  text-center
                  text-[#F5DAA7]
                  mb-10
                  sm:mb-14
                "
              >
                {sub.title}
              </h2>

              {/* ITEMS */}
              <div className="space-y-4 sm:space-y-6">

                {sub.items.map((item, itemIndex) => (

                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: itemIndex * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      sm:gap-3
                      py-4
                      sm:py-5
                      px-2
                      rounded-xl
                      hover:bg-white/5
                      transition-all
                      duration-300
                    "
                  >

                    {/* NAME */}
                    <h3
                      className="
                        text-sm
                        sm:text-base
                        font-medium
                        tracking-wide
                        text-cream
                        whitespace-nowrap
                        group-hover:text-[#F5DAA7]
                        transition
                        font-['Inter']
                      "
                    >
                      {item.name}
                    </h3>

                    {/* LINE */}
                    <div
                      className="
                        flex-1
                        border-b
                        border-dashed
                        border-[#F5DAA7]/15
                        group-hover:border-[#F5DAA7]/40
                        transition
                      "
                    />

                    {/* PRICE */}
                    <span
                      className="
                        text-[#F5DAA7]
                        text-sm
                        sm:text-base
                        font-bold
                        tracking-wider
                        whitespace-nowrap
                        group-hover:scale-110
                        group-hover:text-white
                        transition
                      "
                    >
                      {item.price}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CategoryPage;