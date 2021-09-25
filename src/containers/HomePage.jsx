import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

export default function HomePage({ socket }) {
  return (
    <>
      <div>Hello World!</div>
      <Modal />
    </>
  );
}

HomePage.propTypes = {
  socket: PropTypes.object.isRequired,
};
