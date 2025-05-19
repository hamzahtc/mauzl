import { services } from "@/common/contants";
import { Stack } from "@mui/material";
import NavbarMenuItem from "./NavbarMenuItem";

const NavbarMenu: React.FC = () => {
  return (
    <Stack direction="row" gap={{ xs: 1, md: 3, lg: 6 }} alignItems="center">
      {services.map((service) => (
        <NavbarMenuItem key={service.name} service={service} />
      ))}
    </Stack>
  );
};

export default NavbarMenu;
