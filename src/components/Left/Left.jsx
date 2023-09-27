
import { useTheme } from "@mui/material";
import img from "../../assets/images/log02.svg";
import { LeftLogo, LeftWrapper } from './style';
const Left = ({bgImage}) => {
    const theme =useTheme();
    return (
        <LeftWrapper bgImage={bgImage}>
            <LeftLogo filter={theme.palette.mode} src={img}/>
        </LeftWrapper>
    );
}

export default Left;
