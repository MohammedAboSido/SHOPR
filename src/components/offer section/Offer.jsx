import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Typography } from "../../global/components";
import { StyledOffer, StyledOfferText } from "./Offer.Styled";

function Offer() {
  const [hide, setHide] = useState(true);
  let handelShow = () => {
    setHide(false);
  };
  return (
    hide && (
      <StyledOffer>
        <StyledOfferText>70% off storewide — Limited time</StyledOfferText>
        <Typography onClick={handelShow}>
          <FaTimes />
        </Typography>
      </StyledOffer>
    )
  );
}

export default Offer;
