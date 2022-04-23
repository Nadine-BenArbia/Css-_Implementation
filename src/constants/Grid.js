import styled from "@emotion/styled";
import { colors } from "./colors";
import images from "./images";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  margin: 10%;
  background-color: "#F3F8F8";
  grid-template-rows: 1fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "sidebar content2 content2 content2 "
    "sidebar content content content";
  text-align: center;
  grid-gap: 0rem;
`;

export const resContainer = styled(Container)`
  @media screen and (min-width: 700px) {
    max-width: 960px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    margin: 0 auto;
  }
`;

export const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
export const SideBar = styled.div`
  /* background-image: url(${images.griditem1}); */
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-color: ${colors.background};
  grid-area: sidebar;
  /* padding: 0rem; */
  /* padding-bottom: 2%; */
  /* border-top: 1px solid red; */
`;
export const ContentBox2 = styled.div`
  display: flex;
  gap: 0rem;
  padding: 0rem;
  align-items: center;
  grid-area: content2;
  justify-content: center;
`;
export const ContentBox = styled.div`
  display: flex;
  gap: 0rem;
  padding: 0rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;
export const Content1 = styled.div`
  background-color: ${colors.background};
  padding: 0rem;
  width: 100%;
  height: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: red;
  padding-bottom: 2%;
`;
export const Content2 = styled(Content1)``;
export const Content3 = styled.div`
  background-color: ${colors.background};
  padding: 0rem;
  width: 100%;
  height: 100%;
  border-top: 1px solid red;
  /* background-image: url(${images.Group19}); */
  background-repeat: no-repeat;
  justify-content: center;
  padding-bottom: 2%;
`;
export const Content4 = styled(Content1)``;
export const Content5 = styled(Content1)``;
export const Content6 = styled(Content1)``;
