import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatBox from "@components/ChatBox";
import axios from "axios";

export default function Home() {
  const socket = io(`${process.env.ENDPOINT}:${process.env.PORT || 3000}`);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages").then((response) => setMessages(response.data));
    console.log("Fetched all messages");
  }, []);

  useEffect(() => {
    socket.on("message", (msg) => setMessages((state) => [...state, msg]));
  }, []);

  return (
    <div>
      <h1>Socket message test</h1>
      <h3>Messages:</h3>
      <ul>
        {messages?.map((msg, index) => (
          <li key={`msg-${index}`}>{msg}</li>
        ))}
      </ul>
      <ChatBox onSubmit={(text) => socket.emit("message", text)} />
    </div>
  );
}
