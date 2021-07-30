import React, { Component } from "react";
import {
  Column,
  Container,
  PropertyMainBox,
  PropertyShowBox,
} from "../../GlobalStyle";
import InputRange from "../InputRange";
import { RgbaBox } from "./Rgba.style";

class Rgba extends Component {
  state = {
    r: 0,
    g: 0,
    b: 0,
    a: 99,
  };
  render() {
    let { r, g, b, a } = this.state;
    return (
      <PropertyMainBox>
        <h1>Generate Box Shadow</h1>
        <Container>
          <Column>
            <InputRange
              title="R"
              max={255}
              value={r}
              handleChange={(e) => this.setState({ r: e.target.value })}
            />
            <InputRange
              title="G"
              max={255}
              value={g}
              handleChange={(e) => this.setState({ g: e.target.value })}
            />
            <InputRange
              title="B"
              max={255}
              value={b}
              handleChange={(e) => this.setState({ b: e.target.value })}
            />
            <InputRange
              title="A"
              max={99}
              value={a}
              handleChange={(e) => this.setState({ a: e.target.value })}
            />
          </Column>
          <Column>
            <RgbaBox color={`rgba(${r},${g},${b},0.${a})`} />
            <PropertyShowBox>
              {`background-color:rgba(${r},${g},${b},0.${a})`}
            </PropertyShowBox>
          </Column>
        </Container>
      </PropertyMainBox>
    );
  }
}

export default Rgba;
