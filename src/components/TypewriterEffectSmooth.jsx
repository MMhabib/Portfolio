/* eslint-disable react/prop-types */
"use client";

import { cn } from "../lib/utils";
import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  initialDelay = 0,      // New: Delay before animation starts (in seconds)
  typingSpeed = 0.03,     // New: Speed of typing (seconds per character)
}) => {
  // Combine words into a single array of characters while preserving styles
  const chars = words.flatMap((word) => [
    ...word.text.split("").map((char) => ({ char, className: word.className })),
    { char: " ", className: "" },
  ]);
  if (chars.length > 0) {
    chars.pop(); // Remove the trailing space
  }

  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    setVisibleChars(0);
    // Store animation controls to stop them on cleanup
    let controls;

    // Create an async function to handle the sequential animation
    const runAnimation = async () => {
      // 1. Handle initial delay
      if (initialDelay > 0) {
        await new Promise((resolve) => setTimeout(resolve, initialDelay * 1000));
      }

      let currentPos = 0;
      // Loop through each word object
      for (const wordObj of words) {
        const wordLength = wordObj.text.length;
        const targetPos = currentPos + wordLength;

        // Animate the typing of the current word
        controls = animate(currentPos, targetPos, {
          duration: wordLength * typingSpeed,
          ease: "linear",
          onUpdate: (latest) => {
            setVisibleChars(Math.round(latest));
          },
        });
        await controls.then(); // Wait for the word animation to complete

        // 2. Handle pause after the word, if specified
        if (wordObj.delay) {
          await new Promise((resolve) => setTimeout(resolve, wordObj.delay * 1000));
        }
        
        // Reveal the space after the word (if it's not the last one)
        const isLastWord = words.indexOf(wordObj) === words.length - 1;
        if (!isLastWord) {
          setVisibleChars(prev => prev + 1);
          currentPos = targetPos + 1;
        } else {
          currentPos = targetPos;
        }
      }
    };

    runAnimation();

    return () => {
      // Stop any running animation when the component unmounts
      if (controls) {
        controls.stop();
      }
    };
  }, [words, initialDelay, typingSpeed]);

  return (
    <div
      className={cn(
        
        className
      )}
    >
      <span className="inline">
        {chars.slice(0, visibleChars).map((charData, index) => (
          <span key={index} className={cn( charData.className)}>
            {charData.char}
          </span>
        ))}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] ml-1 h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};