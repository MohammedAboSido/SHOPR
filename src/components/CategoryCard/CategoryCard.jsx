import {
  CategoryCardImg,
  CategoryCardImgContainer,
  CategoryCardTitle,
  CategoryCardWrapper,
} from "./style";

const CategoryCard = ({ img, title }) => {
  return (
    <CategoryCardWrapper>
      <CategoryCardImgContainer>
        <CategoryCardImg src={img} />
      </CategoryCardImgContainer>
      <CategoryCardTitle>{title}</CategoryCardTitle>
    </CategoryCardWrapper>
  );
};

export default CategoryCard;
