import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container =styled("div")`
label:Container;
width:94%;
margin:0 auto;`

export const MainButton = styled('button')`
label:MainButton;
background-color: black;
color:white;
display: flex;
padding: 10px 26px;
justify-content: center;
align-items: center;
border-radius: 39px;
width: fit-content;
font-size:20px;
`


export const StyledLink = styled(Link)`
color: #121212;
font-size: 18px;
font-weight: 500;
text-decoration:underline;
text-underline-offset: 10px;
`






export const StyledImage = styled.img`
  max-width: 100%;
  width: ${props => props.width}%;
  height: ${props => props.height}%;
`



export const SubContainer = styled.div`
width: 80%;
margin: auto;
`


export const FlexBox = styled.div`  
    display: flex;
`

export const FlexColum = styled(FlexBox)`  
    flex-direction: column;
`

export const Typography = styled.p`
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
      margin: ${props => props.margin};
      text-align:${props => props.textalign}; 
    
  
`