import styled from "@emotion/styled";
import { colors } from "./colors";

export const PrimaryButton = styled("button")`
  font-family: "Darker Grotesque", sans-serif;
  font-weight: 600;
  font-size: large;
  background-color: ${colors.red};
  border-radius: 1.2em;
  padding: 0.5em 1em;
  color: ${colors.white};
  border: solid ${colors.white};
  outline: solid ${colors.red};
`;
export const SecondaryButton = styled("button")`
  font-family: "Darker Grotesque", sans-serif;
  font-weight: 400;
  text-align: inherit;
  background-color: ${colors.red};

  padding: 0.5em 1em;
  color: ${colors.white};
`;
