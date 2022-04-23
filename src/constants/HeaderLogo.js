import styled from "@emotion/styled";
import images from "./images";

export const LogoContainer = styled("div")``;
LogoContainer.defaultProps = {
  position: "relative",
};
export const Image1 = styled(LogoContainer)`
  position: "relative";

  src: ${images.RichBoy};
`;
export const Image2 = styled(LogoContainer)`
  position: "absolute";
  src: ${images.image3};
`;
