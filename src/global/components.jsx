import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Field } from "formik";
import { Link } from "react-router-dom";

export const Container = styled("div")`
  label: Container;
  width: 94%;
  margin: 0 auto;
`;

export const MainButton = styled("button")`
  label: MainButton;
  background-color: black;
  color: white;
  display: flex;
  padding: 10px 26px;
  justify-content: center;
  align-items: center;
  border-radius: 39px;
  width: fit-content;
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  color: #121212;
  font-size: 18px;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 10px;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
`;

export const SubContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexColum = styled(FlexBox)`
  flex-direction: column;
`;

export const Typography = styled.p`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textalign};
`;

export const StyledButton = styled(Button)`
  label: StyledButton;
  display: flex;
  padding: 19px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.bgPrimary.main};
  color: ${({ theme }) => theme.palette.background.paper};
  text-align: center;
  font-family: "Space Grotesk", sans-serif;
  text-transform: none;
  font-size: 22px;
  width: ${({ width }) => width};
  font-weight: 500;
  &:hover {
    background-color: ${({ theme }) => theme.palette.bgPrimary.main};
  }
`;

export const MainInput = styled(Field)`
  label: MainInput;
  background-color: ${({ theme }) => theme.palette.background.paper};
  display: flex;
  height: 52px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  min-width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.input.primary};
  color: ${({ theme }) => theme.palette.bgPrimary.main};

  &::placeholder {
    color: ${({ theme }) => theme.palette.input.primary};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
export const CheckBoxInput = styled(Field)`
  label: CheckBoxInput;
  outline: none;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid #605f5f;
`;
