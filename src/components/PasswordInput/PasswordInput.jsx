import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { MainInput } from "../../global/components";
import { PasswordInputWrapper } from "./style";
const PasswordInput = () => {
  const [hide, setHide] = useState(true);
  return (
    <>
      <PasswordInputWrapper>
        <MainInput
          type={hide ? "password" : "text"}
          name="password"
          placeholder="Password"
        />
        {hide ? (
          <IconButton onClick={() => setHide((prev) => !prev)}>
            <RemoveRedEyeIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setHide((prev) => !prev)}>
            <VisibilityOffIcon />
          </IconButton>
        )}
      </PasswordInputWrapper>
    </>
  );
};

export default PasswordInput;
