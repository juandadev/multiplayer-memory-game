import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "@components/Button";
import {
  Background,
  BtnGroup,
  Card,
  Container,
  Label,
  Logo,
  Row,
} from "@styles/Modal.styled";

export default function Modal() {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("modal");
    setMounted(true);
  }, []);

  return mounted
    ? ReactDOM.createPortal(
        <Background>
          <Container>
            <Logo className="icon-logo" />
            <Card>
              <Row>
                <Label>select theme</Label>
                <BtnGroup>
                  <Button active variant="secondary" fluid btnType="menu">
                    numbers
                  </Button>
                  <Button variant="secondary" fluid btnType="menu">
                    icons
                  </Button>
                </BtnGroup>
              </Row>
              <Row>
                <Label>number of players</Label>
                <BtnGroup many>
                  <Button active variant="secondary" fluid btnType="menu">
                    1
                  </Button>
                  <Button variant="secondary" fluid btnType="menu">
                    2
                  </Button>
                  <Button variant="secondary" fluid btnType="menu">
                    3
                  </Button>
                  <Button variant="secondary" fluid btnType="menu">
                    4
                  </Button>
                </BtnGroup>
              </Row>
              <Row>
                <Label>grid size</Label>
                <BtnGroup>
                  <Button active variant="secondary" fluid btnType="menu">
                    4x4
                  </Button>
                  <Button variant="secondary" fluid btnType="menu">
                    6x6
                  </Button>
                </BtnGroup>
              </Row>
              <Button fluid btnType="menu">
                start game
              </Button>
            </Card>
          </Container>
        </Background>,
        ref.current
      )
    : null;
}
