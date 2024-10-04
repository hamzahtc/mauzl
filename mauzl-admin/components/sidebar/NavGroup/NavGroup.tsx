import PropTypes from "prop-types";
// mui imports
import { ListSubheader, styled } from "@mui/material";
import { Theme } from "@mui/material/styles"; // Ensure you're importing Theme

type NavGroup = {
  navlabel?: boolean;
  subheader?: string;
};

const NavGroup = ({ item }: { item: { subheader: string } }) => {
  const ListSubheaderStyle = styled(ListSubheader)(
    ({ theme }: { theme: Theme }) => ({
      ...theme.typography.overline,
      fontWeight: "700",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(0),
      color: theme.palette.text.primary,
      lineHeight: "26px",
      padding: "3px 12px",
    })
  );

  return <ListSubheaderStyle>{item.subheader}</ListSubheaderStyle>;
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;
