import styled from "@emotion/styled";
import React from "react";
import Icon from "./Icon";

export default function Card() {
  return (
    <CardContainer>
      <Heading>
        White truffle dinner <Icon />
      </Heading>

      <Body>
        From $85.00 per person
        <br />
        May 13 - 16, 2020 • Available between 3:30 pm - 9:00 pm
      </Body>
      <Button>Select</Button>
    </CardContainer>
  );
}

const CardContainer = styled("div")`
  border: 1px solid #d8d9db;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const Heading = styled("h1")`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 8px;
`;

const Body = styled("p")`
  font-size: 14px;
  font-weight: 500;
  color: #6f737b;
  margin: 0;
  margin-bottom: 16px;
`;

const Button = styled("button")`
  background: #da3743;
  border-radius: 4px;
  color: white;
  border: none;
  padding: 6px 16px;
  font-size: 14px;
`;
