import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";
import withLoading from "../../../util/withLoading";

function Profile(props) {
  const loading = false;

  const StyledAvatar = () => (
    <Avatar
      alt="profile img"
      src={isAvatar(props.data)}
      sx={{ width: 88, height: 88 }}
    />
  );
  const StyledTypo = (props) => (
    <Typography variant="h6" display="block" color="primary.contrastText">
      {props.children}
    </Typography>
  );

  const StyledAvatarWithLoading = withLoading(StyledAvatar);
  const StyledTypoWithLoading = withLoading(StyledTypo);

  const isAvatar = (data) => {
    const state = data ? `${data.Avatar}` : "/img/Avatar.png";

    return state;
  };

  return (
    <div>
      <StyledAvatarWithLoading
        variant="circular"
        width={88}
        height={88}
        loading={loading}
      />
      <Box>
        <StyledTypoWithLoading
          style={{ marginBottom: 6, marginTop: 6 }}
          loading={loading}
        >
          김영준
        </StyledTypoWithLoading>
      </Box>
      <Box>
        <StyledTypoWithLoading
          style={{ marginBottom: 6, marginTop: 6 }}
          loading={loading}
        >
          cosmoyj7733@gmail.com
        </StyledTypoWithLoading>
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
