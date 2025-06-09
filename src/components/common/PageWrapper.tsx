import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  initial?: object;
  animate?: object;
  transition?: object;
}

const PageWrapper = ({
  children,
  className = "",
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8 }
}: PageWrapperProps) => {
  return (
    <motion.section
      initial={initial}
      animate={animate}
      transition={transition}
      className={`
        min-h-screen flex items-center justify-center relative py-8 
        md:h-screen md:py-0 
        ${className}
      `}
    >
      {children}
    </motion.section>
  );
};

export default PageWrapper;