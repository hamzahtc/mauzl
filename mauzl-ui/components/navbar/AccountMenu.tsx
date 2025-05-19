import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { UserDto } from "@/models";
import Image from "next/image";
import TextTypography from "../common/TextTypography";
import { useRouter } from "next/navigation";

interface Props {
  user: UserDto;
}

const AccountMenu = ({ user }: Props) => {
  const { push } = useRouter();

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton onClick={() => push("account")} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }}>
            {user.avatarUrl ? (
              <Image
                src={user.avatarUrl}
                alt="avatar"
                width="100"
                height="100"
              />
            ) : (
              <TextTypography
                text={user.username.charAt(0)}
                fontWeight="bold"
                color="white"
              />
            )}
          </Avatar>
        </IconButton>
      </Box>
    </React.Fragment>
  );
};

export default AccountMenu;
