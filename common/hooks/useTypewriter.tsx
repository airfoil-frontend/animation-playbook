"use client";
import React, { useState, useEffect } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 50 }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false); // this could be used to start typing on visible

  useEffect(() => {
    if (isTyping && index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (index >= text.length) {
      setIsTyping(false);
    }
  }, [isTyping, index, text, speed]);

  const renderText = (
    <span>
      {displayText}
      {isTyping && <span className="animate-blink">|</span>}
      <span style={{ opacity: 0.5 }}>{text.slice(index)}</span>
    </span>
  );
  const handleStartTyping = () => {
    setDisplayText("");
    setIndex(0);
    setIsTyping(true);
  };

  return {
    renderText,
    handleStartTyping,
  };
};
