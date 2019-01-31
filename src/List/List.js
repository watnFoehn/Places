// @flow

import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import NewPlace from "../NewPlace/NewPlace";
import places from "../data/places.json";

const List = props => {
  return (
    <div>
      <button>Add</button>
      <NewPlace />
      <Card />
      <ul>
        <li>{places.places[0].name}</li>
      </ul>
    </div>
  );
};

export default List;
