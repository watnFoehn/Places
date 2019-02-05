// @flow

import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid;
  width: 35vw;
  margin: 20px;
  padding: 5px;
`;

const Card = props => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
