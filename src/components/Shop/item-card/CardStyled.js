import styled from "styled-components"

export const Img = styled.div`
  width: 20vw;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 3%;
  background-image: url(${(props) => props.imageA});
  :hover {
    background-image: url(${(props) => props.imageB});
  }
`;

export const SwatchDiv = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.colorCode};
  display: inline-block;
  border-radius: 10px;
  border: solid 1px #999999;
  margin-right: 5px;
`;

export const SwatchBig = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.colorCode};
  display: inline-block;
  border-radius: 3px;
  border: solid 1px #999999;
  margin-right: 5px;
`;

// CURRENT ISSUES:
// API NOT FULL, ADD SWATCHES. ADD PRODUCT DETAIL PAGE