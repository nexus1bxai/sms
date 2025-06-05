import React, { useState, useRef, useEffect } from "react";
import MessageBubble from "../components/MessageBubble";
import "../styles/bitnexus-oneui.css";

export default function Chat({ users }) {
  const [messages, setMessages] = useState([]);
  const [activeUser, setActiveUser] = useState(0);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, user: activeUser }]);
    setInput("");
  }

  function handleSwitch() {
    setActiveUser(activeUser === 0 ? 1 : 0);
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!users) {
    return (
      <div className="bitnexus-bg flex items-center justify-center min-h-screen">
        <div className="card p-8 text-xl">No users found. Please restart the app.</div>
      </div>
    );
  }

  return (
    <div className="bitnexus-bg flex flex-col items-center justify-between min-h-screen p-4">
      <header className="w-full flex items-center justify-between mb-2">
        <span className="text-xl font-bold">{users[activeUser].name}</span>
        <button className="bitnexus-btn" onClick={handleSwitch}>
          Switch to {users[1 - activeUser].name}
        </button>
      </header>
      <main className="flex-1 w-full flex flex-col gap-2 overflow-y-auto pb-4" style={{maxWidth: 600, width: '100%'}}>
        {messages.map((msg, i) => (
          <MessageBubble
            key={i}
            text={msg.text}
            user={msg.user === 0 ? "a" : "b"}
          />
        ))}
        <div ref={chatEndRef} />
      </main>
      <footer className="w-full flex gap-2 mt-2" style={{maxWidth: 600}}>
        <input
          className="bitnexus-input flex-1"
          placeholder={`Type message as ${users[activeUser].name}…`}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => (e.key === "Enter" ? sendMessage() : null)}
        />
        <button className="bitnexus-btn" onClick={sendMessage}>
          Send
        </button>
      </footer>
    </div>
  );
}
