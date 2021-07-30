import React, { Component } from "react";
import { Column, Container,PropertyMainBox } from "../../GlobalStyle";
import {
  ShadowBox,
  ShadowPropertyBox,
  ColorBox,
  Checkbox,
} from "./BoxShadow.style";
import { ChromePicker } from "react-color";
import InputRange from "../InputRange";

class BoxShadow extends Component {
  state = {
    horizontal: 0,
    vertical: 0,
    blur: 0,
    spread: 0,
    color: "rgba(0,0,0,1)",
    colorBoxSet: false,
    set: false,
  };
  handleChangeComplete = (color) => {
    let rgba = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
    this.setState({ color: rgba });
  };
  render() {
    let { horizontal, vertical, blur, spread, color, colorBoxSet, set } =
      this.state;
    return (
      <PropertyMainBox>
        <h1>Generate Box Shadow</h1>
        <Container>
          <Column>
            <InputRange
              title="Horizontal"
              max={50}
              value={horizontal}
              handleChange={(e) =>
                this.setState({ horizontal: e.target.value })
              }
            />
            <InputRange
              title="Vertical"
              max={50}
              value={vertical}
              handleChange={(e) => this.setState({ vertical: e.target.value })}
            />
            <InputRange
              title="Blur"
              max={50}
              value={blur}
              handleChange={(e) => this.setState({ blur: e.target.value })}
            />
            <InputRange
              title="Spread"
              max={50}
              value={spread}
              handleChange={(e) => this.setState({ spread: e.target.value })}
            />

            {/*===============> Start Color Picke <================ */}
            <ColorBox
              color={color}
              onClick={() => this.setState({ colorBoxSet: !colorBoxSet })}
            />
            {colorBoxSet ? (
              <ChromePicker
                color={color}
                onChangeComplete={this.handleChangeComplete}
              />
            ) : (
              ""
            )}
            {/*===============> End Color Picke  <================ */}

            <Checkbox>
              <label>Outset</label>
              <input
                type="checkbox"
                checked={set}
                onChange={() => this.setState({ set: !set })}
              />
              <label>Inset</label>
            </Checkbox>
          </Column>
          <Column>
            <ShadowBox
              shadow={`${
                set ? "inset" : ""
              } ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`}
            />

            <ShadowPropertyBox>
              box-shadow:
              {`${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`}
            </ShadowPropertyBox>
          </Column>
        </Container>
      </PropertyMainBox>
    );
  }
}

export default BoxShadow;
