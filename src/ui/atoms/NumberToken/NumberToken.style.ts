import styled, { css } from "styled-components";

export const Token = styled.div`
  display: flex;
  flex-direction: column;
  text-shadow: none;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7d69c;
  border-radius: 100%;
  box-shadow:
    0 2px 0 rgb(149 50 9 / 58%),
    0 3px 4px rgb(129 41 8 / 20%),
    0 0 6px rgb(92 26 4 / 51%);
`;

export const TextValue = styled.div<{ $isRed: boolean }>`
  font-size: 52px;
  line-height: 0.8em;
  font-family: Times New Roman;
  font-weight: bold;
  color: #1e0a00;

  ${(props) => {
    if (props.$isRed) {
      return css`
        color: #c00020;
      `;
    }
  }}
`;

export const Pips = styled.div`
  display: flex;
  gap: 2px;
`;

export const Pip = styled.div<{ $isRed: boolean }>`
  display: block;
  align-self: center;
  justify-self: center;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #1e0a00;

  ${(props) => {
    if (props.$isRed) {
      return css`
        background-color: #c00020;
      `;
    }
  }}
`;
