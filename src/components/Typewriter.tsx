import { useState, useEffect } from "react";
interface TypewriterProps {
    text: string; 
    speed?: number;
  }
const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout); 
    }
  }, [index, text, speed]);

  return (
    <div className="typewriter-container">
      <p>{displayedText}</p>
      
    </div>
  );
};



export default Typewriter;
