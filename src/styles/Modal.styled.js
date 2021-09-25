import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.transparent
      ? "var(--background-modal-color)"
      : "var(--background-dark-color)"};
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  max-width: 654px;
`;

export const Logo = styled.span`
  margin-bottom: 78px;
  font-size: 40px;
  color: var(--background-light-color);
`;

export const Card = styled.div`
  width: 100%;
  padding: 56px;
  background-color: var(--background-light-color);
  border-radius: 20px;
`;

export const Row = styled.div`
  margin-bottom: 32px;
  width: 100%;
`;

export const Label = styled.p`
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 25px;
  color: var(--text-color);
  text-transform: capitalize;
`;

export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > button {
    margin-right: ${(props) => (props.many ? "21px" : "30px")};

    &:last-child {
      margin-right: 0px;
    }
  }
`;
