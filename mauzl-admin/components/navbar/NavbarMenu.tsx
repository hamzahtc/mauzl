import { services } from "@/common/contants";
import { Stack } from "@mui/material";
import NavbarMenuItem from "./NavbarMenuItem";

const NavbarMenu: React.FC = () => {
  return (
    <Stack direction="row" gap={10}>
      {services.map((service) => (
        <NavbarMenuItem key={service.name} service={service} />
      ))}
    </Stack>
  );
};

export default NavbarMenu;
