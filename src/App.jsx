import React, { useState } from "react";
import Splash from "./pages/Splash";
import Setup from "./pages/Setup";
import Chat from "./pages/Chat";
import "./styles/bitnexus-oneui.css";

function App() {
  const [stage, setStage] = useState("splash");
  const [users, setUsers] = useState(null);

  if (stage === "splash") return <Splash onStart={() => setStage("setup")} />;
  if (stage === "setup") return <Setup onSetup={setUsers} onDone={() => setStage("chat")} />;
  if (stage === "chat") return <Chat users={users} />;
  return null;
}

export default App;
