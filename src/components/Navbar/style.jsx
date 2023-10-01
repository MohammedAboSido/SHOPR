import styled from "@emotion/styled";

export const NavbarBg = styled("div")`
  padding: 0.2rem 0;
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.bgPrimary.main};
`;
export const NavbarWrapper = styled("div")`
  display: flex;
  max-width: 1440px;
  width: 100%;
  height: 70px;
  padding: 19px 0;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const NavbarLogo = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (max-width: 700px) {
    width: 114px;
  }
`;
export const NavbarLogoImgOne = styled("img")`
  filter: invert(${({ theme }) => (theme.palette.mode === "dark" ? 1 : 0)});
  @media screen and (max-width: 700px) {
    width: 19px;
    height: 20px;
  }
`;
export const NavbarLogoImgTwo = styled("img")`
  filter: invert(${({ theme }) => (theme.palette.mode === "dark" ? 1 : 0)});
  @media screen and (max-width: 700px) {
    width: 86px;
    height: 15.986px;
  }
`;
export const NavbarLinks = styled("ul")`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLink = styled("li")`
  & > a {
    color: #121212;
    font-family: Space Grotesk;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.bgPrimary.main};
  }
`;
export const NavbarIcons = styled("ul")`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  & > :last-child {
    display: none;
  }
  & > :nth-child(1),
  & > :nth-child(2) {
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
  & > :last-child {
    @media screen and (max-width: 700px) {
      display: block;
    }
  }
`;
export const NavbarIcon = styled("li")`
  & > svg {
    font-size: 22px;
    cursor: pointer;
  }
`;
