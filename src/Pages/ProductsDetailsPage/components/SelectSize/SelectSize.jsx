import { useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { TabSize } from "./style";

const SelectSize = () => {
  const theme = useTheme();
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
      sx={{
        minHeight: "38px",
        ".css-1aquho2-MuiTabs-indicator, .css-3sx0hq-MuiTabs-indicator": {
          display: "none",
        },
      }}
    >
      <TabSize
        label="S"
        sx={{
          padding: "4px 15px",
          minHeight: "38px",
          minWidth: "fit-content",
          borderRadius: "4px",
          marginRight: "0.5rem",
          border: "1px solid  #cbcbcb",
          "&.Mui-selected": {
            border: `1px solid ${theme.palette.text.primary}`,
            color: theme.palette.text.primary,
          },
        }}
      />
      <TabSize
        label="M"
        sx={{
          padding: "4px 15px",
          minHeight: "38px",
          minWidth: "fit-content",
          borderRadius: "4px",
          marginRight: "0.5rem",
          border: "1px solid  #cbcbcb",
          "&.Mui-selected": {
            border: `1px solid ${theme.palette.text.primary}`,
            color: theme.palette.text.primary,
          },
        }}
      />
      <TabSize
        label="L"
        sx={{
          padding: "4px 15px",
          minHeight: "38px",
          minWidth: "fit-content",
          borderRadius: "4px",
          marginRight: "0.5rem",
          border: "1px solid  #cbcbcb",
          "&.Mui-selected": {
            border: `1px solid ${theme.palette.text.primary}`,
            color: theme.palette.text.primary,
          },
        }}
      />
      <TabSize
        label="XL"
        sx={{
          padding: "4px 15px",
          minHeight: "38px",
          minWidth: "fit-content",
          borderRadius: "4px",
          marginRight: "0.5rem",
          border: "1px solid  #cbcbcb",
          "&.Mui-selected": {
            border: `1px solid ${theme.palette.text.primary}`,
            color: theme.palette.text.primary,
          },
        }}
      />
      <TabSize
        label="2XL"
        sx={{
          padding: "4px 15px",
          minHeight: "38px",
          minWidth: "fit-content",
          borderRadius: "4px",
          marginRight: "0.5rem",
          border: "1px solid  #cbcbcb",
          "&.Mui-selected": {
            border: `1px solid ${theme.palette.text.primary}`,
            color: theme.palette.text.primary,
          },
        }}
      />
    </Tabs>
  );
};

export default SelectSize;
