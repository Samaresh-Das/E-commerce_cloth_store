import { motion } from "framer-motion";

interface journalParams {
  title: string;
  category: string;
  imageUrl: string;
  hoverProps: boolean;
  onMouseEnter: () => void;
}

const Journal = ({
  title,
  category,
  imageUrl,
  hoverProps,
  onMouseEnter,
}: journalParams) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="neu-card overflow-hidden w-full h-full flex flex-col cursor-pointer"
      onMouseEnter={onMouseEnter}
    >
      <div className="h-48 overflow-hidden rounded-t-3xl border-b-4 border-[#E76F51]">
        <motion.img
          animate={{ scale: hoverProps ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <a href="#">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-slate-800 hover:text-[#E76F51] transition-colors duration-300">
            {title}
          </h5>
        </a>
        <p className="mt-4 font-semibold text-sm uppercase tracking-widest text-[#E76F51]">
          {category}
        </p>
      </div>
    </motion.div>
  );
};

export default Journal;
