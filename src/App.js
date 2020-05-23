import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";

export default function App() {
  return (
    <List>
      <Card />
    </List>
  );
}

const List = styled("div")`
  padding: 16px;
`;
