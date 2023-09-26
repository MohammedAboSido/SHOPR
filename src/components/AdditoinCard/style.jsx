import styled from "@emotion/styled";


 export const AdditoinCardWrapper=styled('div')`
 display: flex;
 flex-direction: column;
 gap: 0.8rem;
 width: fit-content;
 position: relative;
 `
 export const AdditoinCardImgContainer=styled('div')`
 width: 310px;
 height: 413px;
 `

 export const AdditoinCardImg=styled('img')`
 width: 100%;
 height: 100%;
 object-fit: cover;

 `
 export const AdditoinCardTitle=styled('span')`
 color: #121212;
font-size: 16px;
font-weight: 500;
text-align:start;
 `    
 export const AdditoinCardPrice=styled('div')`
 display: flex;
 align-items: center;
 gap:1rem;
 `
 export const AdditoinCardNewPrice=styled('span')`
 color: var(--black-900, #121212);
 font-family: Inter;
font-size: 14px;
font-weight: 600;
 `
 export const AdditoinCardOldPrice=styled('span')`
 color: var(--black-400, #A7A7A7);
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
text-decoration-line: line-through;
 `
 export const AdditoinCardNewProducts=styled('span')`
 font-family: Inter;
    display: flex;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: fit-content;
    border-radius: 8px;
    color:black;
    font-weight: bold;
    position: absolute;
    top:15px;
    left:15px;
 `