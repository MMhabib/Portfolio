'use client';

import { motion } from "framer-motion";

export const Texteffect = ({
  text = "Blur In Effect",
  className = "",
  as: Tag = "h2", // default tag is <h2>
}) => {
  return (
    <Tag className={`${className}`}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-1 lg:mr-2">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                delay: (wordIndex * 0.2) + (charIndex * 0.02),
                duration: 0.8,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
};
