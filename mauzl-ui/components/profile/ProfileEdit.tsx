import { useUsersControllerFindMe } from "@/generated/hooks";
import ProfileEditForm from "./ProfileEditForm";

const ProfileEdit = () => {
  const me = useUsersControllerFindMe({
    query: {
      retry: 0,
    },
  });

  const isLoading = me.isLoading || !me.data;
  const user = me.data;

  if (isLoading) return <></>;

  return <ProfileEditForm user={user} key={user?.id} />;
};

export default ProfileEdit;
