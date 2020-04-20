import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background: ${({ imageUrl }) => `url(${imageUrl})`} center center / cover;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.div`
  font-size 20px;
  color: rgb(95, 116, 156);
  text-align: center;
  width: 50%;
`;
