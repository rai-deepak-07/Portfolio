import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg">
          DR
        </div>

        <div className="hidden sm:block">
          <h2 className="text-lg font-bold">Deepak Raikwar</h2>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Backend Developer
          </p>
        </div>
      </motion.div>
    </Link>
  );
}