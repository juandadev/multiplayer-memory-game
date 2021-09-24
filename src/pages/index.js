import React from "react";
import io from "socket.io-client";
import HomePage from "@containers/HomePage";

export default function Home() {
  const socket = io(`${process.env.ENDPOINT}:${process.env.PORT || 3000}`);

  return <HomePage socket={socket} />;
}
