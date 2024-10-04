import {
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconTypography,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Orders",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Products",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Categories",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: IconLogin,
    href: "/authentication/login",
  },
];

export default Menuitems;
