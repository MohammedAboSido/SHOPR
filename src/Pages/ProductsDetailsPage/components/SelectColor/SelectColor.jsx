import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { TabColor } from "./style";

const SelectColor = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
      sx={{
        minHeight: "50px",
        ".css-1aquho2-MuiTabs-indicator , .css-3sx0hq-MuiTabs-indicator": {
          display: "none",
        },
      }}
    >
      <TabColor
        sx={{
          backgroundColor: "#20C997",
          maxWidth: "38px",
          minWidth: "38px",
          minHeight: "38px",
          borderRadius: "50%",
          padding: "4px",
          top: "6px",
          left: "6px",
          marginRight: "0.5rem",

          "&.Mui-selected": {
            outline: "2px solid #807e7e",
            border: "4px solid  white",
          },
        }}
      />
      <TabColor
        sx={{
          backgroundColor: "#AF83F8",
          maxWidth: "38px",
          minWidth: "38px",
          minHeight: "38px",
          borderRadius: "50%",
          padding: "4px",
          top: "6px",
          left: "6px",

          marginRight: "0.5rem",

          "&.Mui-selected": {
            outline: "2px solid #807e7e",
            border: "4px solid  white",
          },
        }}
      />
      <TabColor
        sx={{
          backgroundColor: "#E25563",
          maxWidth: "38px",
          minWidth: "38px",
          minHeight: "38px",
          borderRadius: "50%",
          padding: "4px",
          top: "6px",
          left: "6px",

          marginRight: "0.5rem",

          "&.Mui-selected": {
            outline: "2px solid #807e7e",
            border: "4px solid  white",
          },
        }}
      />
      <TabColor
        sx={{
          backgroundColor: "#464545",
          maxWidth: "38px",
          minWidth: "38px",
          minHeight: "38px",
          borderRadius: "50%",
          padding: "4px",
          top: "6px",
          left: "6px",

          marginRight: "0.5rem",

          "&.Mui-selected": {
            outline: "2px solid #807e7e",
            border: "4px solid  white",
          },
        }}
      />
    </Tabs>
  );
};

export default SelectColor;
