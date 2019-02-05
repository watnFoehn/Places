// @flow

import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 200%;
  text-align: center;
`;

const Header = props => {
  return (
    <Title>
      <p>{props.appTitle}</p>
    </Title>
  );
};

export default Header;
