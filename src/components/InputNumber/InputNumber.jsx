import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { forwardRef } from "react";
import { StyledButton, StyledInput, StyledInputRoot } from "./style";
const CustomNumberInput = forwardRef(function CustomNumberInput(props, ref) {
  return (
    <NumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon />,
          className: "increment",
        },
        decrementButton: {
          children: <RemoveIcon />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});
const InputNumber = () => {
  return <CustomNumberInput aria-label="Quantity Input" min={1} max={99} />;
};

export default InputNumber;
