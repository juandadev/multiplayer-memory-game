import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ChatBox({ onSubmit }) {
  const [chatBox, setChatBox] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(chatBox);
        setChatBox("");
      }}
    >
      <input
        type="text"
        placeholder="Type your message here..."
        value={chatBox}
        onChange={(event) => setChatBox(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

ChatBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
