import styled from "@emotion/styled";

export const CategoryCardWrapper = styled("div")`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const CategoryCardImgContainer = styled("div")`
  width: 196px;
  height: 196px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;
export const CategoryCardImg = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export const CategoryCardTitle = styled("span")`
  color: var(--black-900, #121212);
  text-align: center;
  font-family: Space "Grotesk";
  font-size: 18px;
  font-weight: 500;
`;
