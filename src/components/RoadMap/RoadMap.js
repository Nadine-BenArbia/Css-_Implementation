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
import { LogoMap } from "./Logo";
import { RoadMapStyle } from "./RoadMapStyle";

const RoadMap = () => {
  return (
    <RoadMapStyle>
      <Container>
        <ContentBox2>
          <Content4>Content4</Content4>
          <Content5>Content2</Content5>
          <Content6>Content3</Content6>
        </ContentBox2>
        <SideBar>SideBar</SideBar>
        <ContentBox>
          <Content1>Content1</Content1>
          <Content2>Content2</Content2>
          <Content3>Content3</Content3>
        </ContentBox>
      </Container>
      <LogoMap />
    </RoadMapStyle>
  );
};

export default RoadMap;
