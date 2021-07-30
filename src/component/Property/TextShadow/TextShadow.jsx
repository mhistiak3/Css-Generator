import React, { Component } from "react";
import { Column, Container,PropertyMainBox, PropertyShowBox } from "../../GlobalStyle";
import {
  ShadowBox,
  ColorBox,
} from "./TextShadow.style";

import InputRange from "../InputRange";
import { ChromePicker } from "react-color";

class TextShadow extends Component {
  state = {
    horizontal: 0,
    vertical: 0,
    blur: 0,
    color: "rgba(0,0,0,1)",
    colorBoxSet: false,
    set: false,
  };
  handleChangeComplete = (color) => {
    let rgba = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
    this.setState({ color: rgba });
  };
  render() {
    let { horizontal, vertical, blur, color, colorBoxSet } = this.state;
    return (
      <>
        <PropertyMainBox>
          <h1>Generate Box Shadow</h1>
          <Container>
            <Column>
              <InputRange
                title="Horizontal"
                max={100}
                value={horizontal}
                handleChange={(e) =>
                  this.setState({ horizontal: e.target.value })
                }
              />
              <InputRange
                title="Vertical"
                max={100}
                value={vertical}
                handleChange={(e) =>
                  this.setState({ vertical: e.target.value })
                }
              />
              <InputRange
                title="Blur"
                max={100}
                value={blur}
                handleChange={(e) => this.setState({ blur: e.target.value })}
              />

              {/*===============> Start Color Picke <================ */}
              <h3 style={{ margin: "15px 0" }}>Shadow Color</h3>
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
            </Column>
            <Column>
              <ShadowBox
                shadow={`${horizontal}px ${vertical}px ${blur}px ${color}`}
              >
                <h2>Text Shadow</h2>
              </ShadowBox>

              <PropertyShowBox>
                text-shadow:
                {`${horizontal}px ${vertical}px ${blur}px  ${color}`}
              </PropertyShowBox>
            </Column>
          </Container>
        </PropertyMainBox>
      </>
    );
  }
}

export default TextShadow;
