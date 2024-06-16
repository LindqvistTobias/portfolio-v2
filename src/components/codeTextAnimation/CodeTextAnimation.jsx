import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CodeTextAnimation.css";

const codeString = `
def example_function(param1, param2, param3): result = param1 + param2 + param3 if result > 20: return "Greater than 20" elif result == 20: return "Equal to 20" else: return "Less than 20"

class ExampleClass: def __init__(self, value): self.value = value def multiply(self, factor): return self.value * factor

for i in range(15, 25): print(example_function(i, i+1, i+2))

try: example_instance = ExampleClass(10) print(example_instance.multiply(2)) except Exception as e: print(f"An error occurred: {e}")
`;

const CodeTextAnimation = () => {
    const [displayText, setDisplayText] = useState("");
  
    useEffect(() => {
      const delay = setTimeout(() => {
        let index = 0;
        const interval = setInterval(() => {
          if (index < codeString.length) {
            setDisplayText((prev) => prev + codeString[index]);
            index++;
          } else {
            clearInterval(interval);
          }
        }, 5);
  
        return () => clearInterval(interval);
      }, 5000); 
  
      return () => clearTimeout(delay);
    }, []);

  return (
    <motion.div 
      className="code-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <pre id="code-text">{displayText}</pre>
    </motion.div>
  );
};

export default CodeTextAnimation;