import React from "react";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import Menuitems from "./MenuItems";

const SidebarItems = () => {
  const pathname = usePathname();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 10.5 }} className="sidebarNav">
        {Menuitems.map((item) => {
          return <NavItem item={item} key={item.id} pathDirect={pathDirect} />;
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
