// @flow

import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import NewPlace from "../NewPlace/NewPlace";
import places from "../data/places.json";

// I think here has to go a .map on Card or places.json to map it into multiple cards
// the multiple cards need to go into some sort of list

class List extends React.Component {
  getDetails() {
    return places.places.map((place, index) => (
      <Card key={index}>
        <p>name: {place.name}</p>
        <p>adress: {place.adress}</p>
        <p>kind of food: {place.kind_of_food}</p>
        <p>price_range: {place.price_range}</p>
        <p>
          link:{" "}
          <a href={place.link} target="_blank" rel="noopener">
            {place.link}
          </a>
        </p>
        <p>other_information: {place.other_information}</p>
      </Card>
    ));
  }
  render() {
    const details = this.getDetails();
    return (
      <div>
        <button>Add</button>
        <NewPlace />
        {details}
      </div>
    );
  }
}

export default List;
