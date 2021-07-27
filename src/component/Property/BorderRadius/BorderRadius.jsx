import React, { Component } from "react";
import { Column, Container } from "../../GlobalStyle";
import {
  BorderRadiusProperty,
  BorderRadiusBox,
  BorderRadiusPropertyBox,
} from "./BorderRadius.style";

import InputRange from "../InputRange";

class BorderRadius extends Component {
  state = {
    one: 0,
    tow: 0,
    three: 0,
    four: 0,
    _one: 100,
    _tow: 100,
    _three: 100,
    _four: 100,
  };

  render() {
    let { one, tow, three, four, _one, _tow, _three, _four } = this.state;
    return (
      <>
        <BorderRadiusProperty>
          <h1>Generate Box Shadow</h1>
          <Container>
            <Column>
              <InputRange
                title="Top Left"
                max={100}
                value={one}
                handleChange={(e) => this.setState({ one: e.target.value })}
              />
              <InputRange
                title="Top Left"
                max={100}
                value={_one}
                handleChange={(e) => this.setState({ _one: e.target.value })}
              />
              <InputRange
                title="Top Right"
                max={100}
                value={tow}
                handleChange={(e) => this.setState({ tow: e.target.value })}
              />
              <InputRange
                title="Top Right"
                max={100}
                value={_tow}
                handleChange={(e) => this.setState({ _tow: e.target.value })}
              />
              <InputRange
                title="Bottom Right"
                max={100}
                value={three}
                handleChange={(e) => this.setState({ three: e.target.value })}
              />
              <InputRange
                title="Bottom Right"
                max={100}
                value={_three}
                handleChange={(e) => this.setState({ _three: e.target.value })}
              />
              <InputRange
                title="Bottom Left"
                max={100}
                value={four}
                handleChange={(e) => this.setState({ four: e.target.value })}
              />

              <InputRange
                title="Bottom Left"
                max={100}
                value={_four}
                handleChange={(e) => this.setState({ _four: e.target.value })}
              />
            </Column>
            <Column>
              <BorderRadiusBox
                borderRadius={`${one}% ${tow}% ${three}% ${four}% / ${_one}% ${_tow}% ${_three}% ${_four}%`}
              ></BorderRadiusBox>

              <BorderRadiusPropertyBox>
                {`border-radius:${one}% ${tow}% ${three}% ${four}% / ${_one}% ${_tow}% ${_three}% ${_four}%`}
              </BorderRadiusPropertyBox>
            </Column>
          </Container>
        </BorderRadiusProperty>
      </>
    );
  }
}

export default BorderRadius;
