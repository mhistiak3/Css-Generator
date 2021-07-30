import React, { Component } from "react";
import { PropertyMainBox, Container, Column } from "../../GlobalStyle";
import { Gradientbox } from "./Gradient.style";

export default class Gradient extends Component {
  state = {
    gradient: "linear-gradient",
    direction: "to top",
  };
  render() {
    let { gradient, direction } = this.state;
    return (
      <PropertyMainBox>
        <h1>Css Gradient Generator</h1>
        <Container>
          <Column>
            {/* Select Gradient */}
            <select
              onChange={(e) => this.setState({ gradient: e.target.value })}
            >
              <option selected disabled>
                Select Gradient
              </option>
              <option value="linear-gradient">Linear Gradient</option>
              <option value="radial-gradient">Radial Gradient</option>
            </select>

            {/* Select Direction */}
            <select
              onChange={(e) => this.setState({ direction: e.target.value })}
            >
              <option disabled selected>
                Select Direction
              </option>
              <option value="to right">To Right</option>
              <option value="to left">To Left</option>
              <option value="to top">To Top</option>
              <option value="to bottom">To Bottom</option>
            </select>
          </Column>
          <Column>
            <Gradientbox color={`${gradient}(${direction},red,blue)`} />
          </Column>
        </Container>
      </PropertyMainBox>
    );
  }
}
