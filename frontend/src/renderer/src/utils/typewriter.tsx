import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState<string>('');
  const typingSpeed: number = 80;

  if (!text) {
    text = 'NoData';
  }

  useEffect(() => {
    let i: number = -1;
    let intervalId: NodeJS.Timeout;

    const writeText = () => {
      intervalId = setInterval(() => {
        i++;
        setDisplayText((prevText: string) => {
          if (prevText.length < text.length) {
            return prevText + text[prevText.length];
          } else {
            clearInterval(intervalId);
            return prevText;
          }
        });
      }, typingSpeed);
    };

    writeText();

    return () => clearInterval(intervalId);
  }, [text]);

  return <span className="w-full text-4xl pr-0.5">{displayText}</span>;
};

export default Typewriter;
