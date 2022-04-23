import React from "react";
import {
  Container,
  H1,
  GridItemLeft,
  GridItemRight,
  GridItemTitle,
  IconStyle,
  ItemRight,
  LeftContainer,
  LogoFlexStyle,
  StyledContainer,
  StyledContainerText,
  TeamContainer,
  Hr,
  H3,
} from "./GridTeamStyle";
import { GrAdd } from "react-icons/gr";
import { colors } from "@mui/material";

const TeamGrid = () => {
  return (
    <TeamContainer>
      <H1>
        The Team
        <Hr />
      </H1>
      <Container>
        <GridItemLeft>
          <StyledContainerText>
            <StyledContainer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              neque enim consequat nullam tempus gravida maecenas. Maecenas
              pharetra, tincidunt libero, feugiat enim nulla pharetra, sed. Sed
              commodo non habitasse faucibus mattis. Metus, aliquet hendrerit
              fames habitant dignissim ut eget. Ornare in cursus varius placerat
              vitae integer.
            </StyledContainer>
            <LogoFlexStyle />
          </StyledContainerText>
        </GridItemLeft>
        <LeftContainer>
          <GridItemRight>
            <ItemRight>
              <GridItemTitle>
                <H3>D8nt3</H3>
                <StyledContainer>Founder & Project Manager</StyledContainer>
              </GridItemTitle>
            </ItemRight>
            <Hr />
            <ItemRight>
              <GridItemTitle>
                <H3>Pucman</H3>
                <StyledContainer>Technical Lead</StyledContainer>
              </GridItemTitle>
            </ItemRight>
            <Hr />
            <ItemRight>
              <GridItemTitle>
                <H3>Hydra</H3>
                <StyledContainer>Artist</StyledContainer>
              </GridItemTitle>
            </ItemRight>
            <Hr />
            <ItemRight>
              <GridItemTitle>
                <H3>Anas</H3>
                <StyledContainer>developer</StyledContainer>
              </GridItemTitle>
            </ItemRight>
            <Hr />
          </GridItemRight>
          <IconStyle>
            <GrAdd />
            <GrAdd />
            <GrAdd />
            <GrAdd />
          </IconStyle>
        </LeftContainer>
      </Container>
    </TeamContainer>
  );
};

export default TeamGrid;
