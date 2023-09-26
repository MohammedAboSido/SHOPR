import styled from "@emotion/styled";

export const NavbarBg=styled('div')`
padding: 0.2rem 0;
`
export const NavbarWrapper=styled('div')`
display: flex;
width: 1440px;
height: 70px;
padding: 20px 0;
justify-content: space-between;
align-items: center;
`
export const NavbarLogo=styled('div')`
display: flex;
align-items: center;
gap: 1rem;
`
export const NavbarLogoImgOne=styled('img')`

`
export const NavbarLogoImgTwo=styled('img')`
`
export const NavbarLinks=styled('ul')`
list-style: none;
display: flex;
align-items: center;
gap: 3rem;
`
export const NavbarLink=styled('li')`
&>a {
 text-decoration: none;
 color: black;
 font-weight:500 ;
 font-size: 18px;
}
`
export const NavbarIcons=styled('ul')`
list-style: none;
display: flex;
align-items: center;
gap: 1.5rem;
`
export const NavbarIcon=styled('li')`

&>svg {
    font-size: 22px;
    cursor: pointer;
}
`
