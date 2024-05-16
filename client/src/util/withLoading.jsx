import { Skeleton } from "@mui/material";
import React, { Fragment } from "react";

function withLoading(Components) {
  return (props) => {
    const { variant, width, height, style, loading, data } = props;
    return (
      <Fragment>
        {!loading ? (
          <Skeleton
            variant={variant}
            width={width}
            height={height}
            style={style}
          />
        ) : (
          <Components>{data}</Components>
        )}
      </Fragment>
    );
  };
}

export default withLoading;

/*
  const StyledAvatar = () => <Avatar alt="profile img" src={isAvatar(props.data) sx={{ width: 88, height: 88}}}/>
  const StyledAvatarWithLoading = withLoading(StyledAvatar);


  return (
    <StyledAvatarWithLoading variant={circular} width={88} height={88}
  )


*/
