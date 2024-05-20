import React, { Fragment } from "react";
import { Card, Box, Avatar } from "@mui/material";

import withLoading from "../../../util/withLoading";

const StyledImg = (props) => {
  <Avatar alt="thumbnail img" src={props} sx={{ width: 100, height: 100 }} />;
};

function CurationItem(props) {
  const loading = true;
  const StyledImgWithLoading = withLoading(StyledImg(props.thumbnail));

  return (
    <Fragment>
      <Box width={100} height={100}>
        <Card width={100} height={100}>
          <Avatar src={props.thumbnail} alt="thumbnail img" sx={{ width: 100, height: 100 }} />
        </Card>
      </Box>
    </Fragment>
  );
}

export default CurationItem;
