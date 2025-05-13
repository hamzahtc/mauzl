import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Stack } from "@mui/material";
import { ProductDto } from "@/models";

interface ProductTabsProps {
  product?: ProductDto;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
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
          </TabList>
        </Stack>
        <TabPanel value="description">{product?.description}</TabPanel>
        <TabPanel value="info">
          {product?.additionalInfos.map((info, index) => (
            <Stack
              key={index}
              direction="row"
              justifyContent="space-between"
              sx={{ width: "100%", padding: 1 }}
            >
              <span>{info}</span>
            </Stack>
          ))}
        </TabPanel>
      </TabContext>
    </Stack>
  );
};

export default ProductTabs;
