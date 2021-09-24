import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatBox from "@components/ChatBox";
import PropTypes from "prop-types";

export default function HomePage({ socket }) {
  const [messages, setMessages] = useState([]);
  const [field, setField] = useState("");

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
      <span className="icon-bug" />
      <h3>Messages:</h3>
      <ul>
        {messages?.map((msg, index) => (
          <li key={`msg-${index}`}>{msg}</li>
        ))}
      </ul>
      <ChatBox
        onSubmit={(text) => {
          socket.emit("message", text);
          setMessages((state) => [...state, text]);
        }}
      />
      <input
        type="text"
        value={field}
        onChange={(event) => setField(event.target.value)}
      />
    </div>
  );
}

HomePage.propTypes = {
  socket: PropTypes.object.isRequired,
};
