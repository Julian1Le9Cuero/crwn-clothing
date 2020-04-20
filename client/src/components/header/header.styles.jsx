import styled from "styled-components";
import { Link } from "react-router-dom";
// Import css to reuse sttyles that are duplicated

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

// Use styled() to use a Link element because it is different than a normal HTML element
export const LogoContainer = styled(Link)`
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    width: 40px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
