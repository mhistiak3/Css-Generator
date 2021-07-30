import React, { Component } from "react";
import { Column, Container,PropertyMainBox, PropertyShowBox } from "../../GlobalStyle";
import {
  FilterBox,
} from "./Filter.style";
import InputRange from "../InputRange";

class Filter extends Component {
  state = {
    Grayscale: 0,
    Sepia: 0,
    Blur: 0,
    Brightness: 100,
    HueRotate: 0,
    Saturate: 100,
    Opacity: 100,
    Contrast: 100,
    Invert: 0,
  };

  render() {
    let {
      Grayscale,
      Sepia,
      Blur,
      Brightness,
      HueRotate,
      Saturate,
      Opacity,
      Contrast,
      Invert,
    } = this.state;
    return (
      <PropertyMainBox>
        <h1>Generate Box Shadow</h1>
        <Container>
          <Column>
            <InputRange
              title="Grayscale"
              max={100}
              value={Grayscale}
              handleChange={(e) => this.setState({ Grayscale: e.target.value })}
            />
            <InputRange
              title="Sepia"
              max={100}
              value={Sepia}
              handleChange={(e) => this.setState({ Sepia: e.target.value })}
            />
            <InputRange
              title="Blur"
              max={10}
              value={Blur}
              handleChange={(e) => this.setState({ Blur: e.target.value })}
            />
            <InputRange
              title="Brightness"
              max={200}
              value={Brightness}
              handleChange={(e) =>
                this.setState({ Brightness: e.target.value })
              }
            />
            <InputRange
              title="Hue Rotate"
              max={360}
              value={HueRotate}
              handleChange={(e) => this.setState({ HueRotate: e.target.value })}
            />
            <InputRange
              title="Saturate"
              max={1000}
              value={Saturate}
              handleChange={(e) => this.setState({ Saturate: e.target.value })}
            />

            <InputRange
              title="Opacity"
              max={100}
              value={Opacity}
              handleChange={(e) => this.setState({ Opacity: e.target.value })}
            />
            <InputRange
              title="Contrast"
              max={1000}
              value={Contrast}
              handleChange={(e) => this.setState({ Contrast: e.target.value })}
            />
            <InputRange
              title="Invert"
              max={100}
              value={Invert}
              handleChange={(e) => this.setState({ Invert: e.target.value })}
            />
          </Column>
          <Column>
            <FilterBox
              filter={`grayscale(${Grayscale}%) sepia(${Sepia}%) blur(${Blur}px) brightness(${Brightness}%) hue-rotate(${HueRotate}deg) saturate(${Saturate}%) opacity(${Opacity}%) contrast(${Contrast}%) invert(${Invert}%)`}
            />

            <PropertyShowBox>
              {`filter: grayscale(${Grayscale}%) sepia(${Sepia}%) blur(${Blur}px) brightness(${Brightness}%) hue-rotate(${HueRotate}deg) saturate(${Saturate}%) opacity(${Opacity}%) contrast(${Contrast}%) invert(${Invert}%)`}
            </PropertyShowBox>
          </Column>
        </Container>
      </PropertyMainBox>
    );
  }
}

export default Filter;
