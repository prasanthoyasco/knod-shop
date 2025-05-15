import { useEffect, useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { IoClose, IoSend } from "react-icons/io5";
import "./FloatingIcon.css";

export default function FloatingIcon() {
  const [bounce, setBounce] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce((b) => !b);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div
        className={`floating-icon ${
          bounce ? "animate__animated animate__bounce" : ""
        }`}
        onClick={toggleChat}
      >
        <BsChatDots size={30} />
      </div>

      {isOpen && (
        <div className="chatbot-box shadow">
          <div className="chatbot-header">
            <strong>ChatBot</strong>
            <button onClick={toggleChat} className="chatbot-close-btn">
              <IoClose size={22} />
            </button>
          </div>
          <div className="chatbot-body">
            <p>Hello! How can I assist you?</p>
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              className="chatbot-textbox"
            />
            <button className="chatbot-send-btn"><IoSend /></button>
          </div>
        </div>
      )}
    </>
  );
}
