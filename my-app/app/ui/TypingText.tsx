'use client'

import { useState, useEffect } from "react";

const TypingText = ({
           initialText,otherText
          }:{ 
            initialText:string,otherText:string 
          }) => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      let originalText = initialText;
      let index = 0;
  
      const typeText = () => {
        if (index < originalText.length) {
          setText(originalText.substring(0, index + 1));
          index++;
          setTimeout(typeText, 100);
        } else {
          setTimeout(eraseText, 2000);
        }
      };
  
      const eraseText = () => {
        if (index > 0 ) {
          setText(originalText.substring(0, index - 1));
          index--;
          setTimeout(eraseText, 100);
        } else {
          setTimeout(typeOtherText, 2000);
        }
      };
  
      const typeOtherText = () => {
        originalText = otherText;
        if (index < originalText.length) {
          setText(originalText.substring(0, index + 1));
          index++;
          setTimeout(typeOtherText, 100);
        }else{
          setIsTyping(false);
        }
  
        
      };
  
      if (isTyping) {
        typeText();
      }
    }, [isTyping, initialText, otherText]);
  
    return (
        <div className="typing">
          {text}
          <p>|</p> 
        </div>   
    );
  }

  export default TypingText