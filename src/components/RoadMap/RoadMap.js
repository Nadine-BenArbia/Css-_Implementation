import React from "react";

import {
  Container,
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
  Content6,
  ContentBox,
  ContentBox2,
  SideBar,
} from "../../constants/Grid";
import { LogoMap1, LogoMap2 } from "./Logo";

import {
  Content3Logo,
  GridLogoSideBar0,
  GridLogoSideBar1,
  GridLogoSideBar2,
  H1,
  H3,
  RoadMapStyle,
  StyledTextGrid,
} from "./RoadMapStyle";

const RoadMap = () => {
  return (
    <RoadMapStyle>
      <H1>RoadMap</H1>
      <Container>
        <ContentBox2>
          <Content4>
            <H3>Project</H3>

            <StyledTextGrid>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              neque enim consequat nullam tempus gravida maecenas. Maecenas
              pharetra, tincidunt libero, feugiat enim nulla pharetra,
            </StyledTextGrid>
          </Content4>
          <Content5>
            <H3> Art Direction</H3>
            <StyledTextGrid>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              neque enim consequat nullam tempus gravida maecenas. Maecenas
              pharetra, tincidunt libero, feugiat enim nulla pharetra,
            </StyledTextGrid>
          </Content5>
          <Content6>
            <H3>Presale Phase</H3>
            <StyledTextGrid>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              neque enim consequat nullam tempus gravida maecenas. Maecenas
              pharetra, tincidunt libero, feugiat enim nulla pharetra,
            </StyledTextGrid>
          </Content6>
        </ContentBox2>
        <SideBar>
          <GridLogoSideBar0 />
          <GridLogoSideBar1 />
          <GridLogoSideBar2 />
        </SideBar>

        <ContentBox>
          <Content1>
            <H3>Public Sale</H3>
            <StyledTextGrid>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              neque enim consequat nullam tempus gravida maecenas. Maecenas
              pharetra, tincidunt libero, feugiat enim nulla pharetra,
            </StyledTextGrid>
          </Content1>
          <Content2>
            <H3>Community investments</H3>
            <StyledTextGrid>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              neque enim consequat nullam tempus gravida maecenas. Maecenas
              pharetra, tincidunt libero, feugiat enim nulla pharetra,
            </StyledTextGrid>
          </Content2>
          <Content3>
            <Content3Logo />
          </Content3>
        </ContentBox>
      </Container>

      <LogoMap1 />
      <LogoMap2 />
    </RoadMapStyle>
  );
};

export default RoadMap;
