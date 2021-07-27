import React from "react";
import { ThemeProvider } from "styled-components";
import { Banner, BannerContainer, H1, BannerButton } from "./Home.style";
const Home = () => {
  return (
    <ThemeProvider theme={{ color: "#f5f6fa", dark: true }}>
      <Banner>
        <BannerContainer>
          <H1>
            Generate Your Favourite CSS Property and Use it in Your Projects.
            Very Simple just copy and past{" "}
          </H1>
          <BannerButton to='/property' color={{ color: "#353b48", bg: "#f5f6fa" }}>
            Get Started
          </BannerButton>
        </BannerContainer>
      </Banner>
    </ThemeProvider>
  );
};

export default Home;
