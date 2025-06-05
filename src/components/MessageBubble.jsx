import React from "react";
import "../styles/bitnexus-oneui.css";

export default function MessageBubble({ text, user }) {
  return (
    <div className={`chat-bubble user-${user}`}>
      {text}
    </div>
  );
}
