import {
  AdditoinCardImg,
  AdditoinCardImgContainer,
  AdditoinCardNewPrice,
  AdditoinCardNewProducts,
  AdditoinCardOldPrice,
  AdditoinCardPrice,
  AdditoinCardTitle,
  AdditoinCardWrapper,
} from "./style";

const AdditoinCard = ({ img, newPrice, oldPrice, active, title }) => {
  return (
    <AdditoinCardWrapper>
      <AdditoinCardImgContainer>
        <AdditoinCardImg src={img} />
      </AdditoinCardImgContainer>
      <AdditoinCardTitle>{title}</AdditoinCardTitle>
      <AdditoinCardPrice>
        <AdditoinCardNewPrice>{newPrice}</AdditoinCardNewPrice>
        <AdditoinCardOldPrice>{oldPrice}</AdditoinCardOldPrice>
      </AdditoinCardPrice>
      {active && <AdditoinCardNewProducts>NEW</AdditoinCardNewProducts>}
    </AdditoinCardWrapper>
  );
};

export default AdditoinCard;
