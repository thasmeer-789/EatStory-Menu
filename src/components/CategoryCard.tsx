
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
}

const CategoryCard = ({ title }: Props) => {

  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() =>
        navigate(`/category/${title.toLowerCase()}`)
      }
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        bg-secondary/30
        backdrop-blur-xl
        border border-white/10
        rounded-3xl
        px-6
        py-10
        sm:px-8
        sm:py-14
        cursor-pointer
        text-center
        transition-all
        duration-300
        hover:border-[#F5DAA7]/20
        hover:bg-secondary/40
      "
    >

      <h2
        className="
          text-2xl
          sm:text-3xl
          font-bold
          text-cream
          transition
          group-hover:text-[#F5DAA7]
        "
      >
        {title}
      </h2>

    </motion.div>
  );
};

export default CategoryCard;

