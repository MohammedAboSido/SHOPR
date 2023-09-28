import { useTheme } from "@mui/material";
import img from "../../assets/images/log02.svg";
import { LeftLogo, LeftWrapper } from "./style";
const Left = ({ bgImg }) => {
  const theme = useTheme();
  return (
    <LeftWrapper
      bgimg={bgImg}
      sx={{
        width: { xs: "100%", md: "50vw", lg: "50vw" },
        height: { xs: "430px", sm: "110vh", md: "auto", lg: "1080px" },
      }}
    >
      <LeftLogo filter={theme.palette.mode} src={img} />
    </LeftWrapper>
  );
};

export default Left;
