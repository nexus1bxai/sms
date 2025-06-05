import React, { useState } from "react";
import "../styles/bitnexus-oneui.css";

export default function Setup({ onSetup, onDone }) {
  const [userA, setUserA] = useState({ name: "", color: "#1fe4a3" });
  const [userB, setUserB] = useState({ name: "", color: "#3ca7e1" });

  const ready = userA.name.trim() && userB.name.trim();

  function handleSubmit(e) {
    e.preventDefault();
    if (!ready) return;
    onSetup([userA, userB]);
    onDone();
  }

  return (
    <div className="bitnexus-bg flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold mb-8" style={{background: "linear-gradient(90deg, #1fe4a3, #3ca7e1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Set Up Users</h2>
      <form className="flex flex-col gap-6 w-full max-w-md" onSubmit={handleSubmit}>
        <div className="flex gap-4 items-center">
          <span className="w-8 h-8 rounded-full" style={{ background: userA.color, border: "2px solid #fff", display: "inline-block" }} />
          <input
            className="bitnexus-input flex-1"
            type="text"
            placeholder="User A Name"
            value={userA.name}
            onChange={e => setUserA({ ...userA, name: e.target.value })}
            required
          />
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-8 h-8 rounded-full" style={{ background: userB.color, border: "2px solid #fff", display: "inline-block" }} />
          <input
            className="bitnexus-input flex-1"
            type="text"
            placeholder="User B Name"
            value={userB.name}
            onChange={e => setUserB({ ...userB, name: e.target.value })}
            required
          />
        </div>
        <button className="bitnexus-btn mt-4" type="submit" disabled={!ready}>
          Enter Chat
        </button>
      </form>
    </div>
  );
}
