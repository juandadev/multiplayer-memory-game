import styled from "styled-components";

const ButtonStyled = styled.button`
  ${(props) => props.fluid && { width: "100%" }}
  font-size: 26px;
  text-transform: capitalize;
  border: none;
  border-radius: 100px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
`;

export const PrimaryButton = styled(ButtonStyled)`
  padding: ${(props) => (props.btnType === "menu" ? "15px 30px" : "13px 28px")};
  color: var(--background-light-color);
  background-color: var(--primary-color);

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;

export const SecondaryButton = styled(ButtonStyled)`
  padding: ${(props) => (props.btnType === "menu" ? "15px 30px" : "13px 28px")};
  color: ${(props) =>
    props.btnType === "menu"
      ? "var(--background-light-color)"
      : "var(--secondary-color)"};
  background-color: ${(props) =>
    props.btnType === "menu"
      ? "var(--secondary-light-color-2)"
      : "var(--secondary-light-color-1)"};

  &.active {
    background-color: var(--secondary-color);
  }

  &:hover {
    background-color: var(--secondary-color-hover);
    ${(props) =>
      props.btnType !== "menu" && { color: "var(--background-light-color)" }}
  }
`;
