import React from "react";
import PropTypes from "prop-types";
import { PrimaryButton, SecondaryButton } from "@styles/Button.styled";

export default function Button({
  active,
  variant,
  btnType,
  fluid,
  onClick,
  children,
}) {
  if (variant === "primary") {
    return (
      <PrimaryButton
        type="button"
        btnType={btnType}
        fluid={fluid}
        onClick={onClick}
      >
        {children}
      </PrimaryButton>
    );
  }

  return (
    <SecondaryButton
      className={active && "active"}
      type="button"
      btnType={btnType}
      fluid={fluid}
      onClick={onClick}
    >
      {children}
    </SecondaryButton>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  btnType: PropTypes.string,
  fluid: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  btnType: "idle",
  fluid: false,
  onClick: null,
};
