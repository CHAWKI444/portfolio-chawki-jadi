import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

function IntroLoader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "#0a192f" }}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        transition: { duration: 0.55, ease },
      }}
      onAnimationComplete={(definition) => {
        if (definition === "exit") return;
      }}
      role="presentation"
      aria-hidden
    >
      <motion.div
        className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease }}
        onAnimationComplete={() => {
          window.setTimeout(() => onComplete?.(), 1450);
        }}
      >
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 48px rgba(100, 255, 218, 0.18)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0.55] }}
          transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" }}
        />

        <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
          <motion.polygon
            points="50,6 90,28 90,72 50,94 10,72 10,28"
            stroke="#64ffda"
            strokeWidth="1.4"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
          />

          {/* Letter C */}
          <motion.path
            d="M52 34.5 C40 34.5 32 41.5 32 50 C32 58.5 40 65.5 52 65.5 C56.5 65.5 60.2 64.2 63 62"
            stroke="#64ffda"
            strokeWidth="2.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
          />

          {/* Letter J */}
          <motion.path
            d="M62 34.5 L62 56.5 C62 62.5 58.2 66 53 66 C49.2 66 46.5 64.2 45 61.5"
            stroke="#64ffda"
            strokeWidth="2.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.65, ease, delay: 0.75 }}
          />
          <motion.path
            d="M54 34.5 L70 34.5"
            stroke="#64ffda"
            strokeWidth="2.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease, delay: 0.7 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default IntroLoader;
