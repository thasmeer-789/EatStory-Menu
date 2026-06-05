
import { motion } from "framer-motion";

interface Props {
  name: string;
  price: string;
  image: string;
}

const MenuItem = ({ name, price, image }: Props) => {

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="
        bg-secondary/40
        backdrop-blur-lg
        rounded-3xl
        overflow-hidden
        shadow-xl
      "
    >

      <img
        src={image}
        alt={name}
        className="
          w-full
          h-48
          sm:h-56
          md:h-60
          object-cover
        "
      />

      <div className="p-5">

        <div className="flex items-center justify-between gap-4">

          <h3
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-semibold
              text-cream
            "
          >
            {name}
          </h3>

          <span
            className="
              text-accent
              text-base
              sm:text-lg
              md:text-xl
              font-bold
              whitespace-nowrap
            "
          >
            {price}
          </span>

        </div>

      </div>

    </motion.div>
  );
};

export default MenuItem;
