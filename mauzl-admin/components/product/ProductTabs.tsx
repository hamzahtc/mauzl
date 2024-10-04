import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Stack } from "@mui/material";

const ProductTabs = () => {
  const [value, setValue] = React.useState("description");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Stack
          alignItems="center"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Description"
              value="description"
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Additional information"
              value="info"
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Reviews (0)"
              value="reviews"
              sx={{ textTransform: "none" }}
            />
          </TabList>
        </Stack>
        <TabPanel value="description">Description</TabPanel>
        <TabPanel value="info">Additional information</TabPanel>
        <TabPanel value="reviews">Reviews (0)</TabPanel>
      </TabContext>
    </Stack>
  );
};

export default ProductTabs;
