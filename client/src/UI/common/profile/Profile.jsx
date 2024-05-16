import React from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";

const ProfileSkeleton = ({ variant, width, height, style }) => {
  return (
    <Skeleton
      animation="wave"
      variant={variant}
      width={width}
      height={height}
      style={style}
    />
  );
};

const ProfileInfo = ({ loading, data }) => {
  if (!loading) {
    return <ProfileSkeleton style={{ marginBottom: 6, marginTop: 6 }} />;
  }
  return (
    <Typography variant="h6" display="block" color="primary.contrastText">
      {data}
    </Typography>
  );
};

function Profile(props) {
  const loading = true;

  const isAvatar = (data) => {
    const state = data ? `${data.Avatar}` : "/img/Avatar.png";

    return state;
  };

  return (
    <div>
      {!loading ? (
        <ProfileSkeleton
          animation="wave"
          variant="circular"
          width={88}
          height={88}
        />
      ) : (
        <Avatar
          alt="profile img"
          src={isAvatar(props.data)}
          sx={{ width: 88, height: 88 }}
        />
      )}
      <Box>
        <ProfileInfo loading={loading} data="김영준" />
      </Box>
      <Box>
        <ProfileInfo loading={loading} data="cosmoyj7733@gmail.com" />
      </Box>
      <Box>
        <Button variant="contained" color="third">
          정보 수정
        </Button>
      </Box>
    </div>
  );
}

export default Profile;
