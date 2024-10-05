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
    <Stack sx={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <TabContext value={value}>
        <Stack
          alignItems="center"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "100%",
            flexDirection: { xs: "column", md: "row" }, // Vertical on small screens, horizontal on larger screens
            justifyContent: { xs: "center", md: "space-around" }, // Centered on small screens
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              width: "100%",
              maxWidth: "500px", // Limit the width of the TabList
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Tab
              label="Description"
              value="description"
              sx={{ textTransform: "none", flexGrow: 1, minWidth: 100 }}
            />
            <Tab
              label="Additional information"
              value="info"
              sx={{ textTransform: "none", flexGrow: 1, minWidth: 100 }}
            />
            <Tab
              label="Reviews (0)"
              value="reviews"
              sx={{ textTransform: "none", flexGrow: 1, minWidth: 100 }}
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
