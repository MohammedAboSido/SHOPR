import styled from "@emotion/styled";

export const StyledInputRoot = styled("div")`
  font-weight: 400;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  max-width: 127px;
  height: 52px;
  display: flex;
  color: #121212;
  background-color: #f5f5f5;
  align-items: center;
`;

export const StyledInput = styled("input")`
  font-size: 16px;
  font-family: inherit;
  font-weight: 400;
  color: #121212;
  background-color: #f5f5f5;
  outline: 0;
  text-align: center;
  max-width: 20px;
  margin: 0 24px;
  border: none;
`;

export const StyledButton = styled("button")(
  ({ theme }) => `
    font-family: Inter;
    font-size: 16px;
    border: 0;
    color: ${theme.palette.bgPrimary.main};
    background-color: #F5F5F5;
    width: 20px;
    height: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    color: #121212;
    &:hover {
      cursor: pointer;
    }
  

    &.increment {
      order: 1;
    }
  `
);
