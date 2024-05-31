import React, { Fragment } from "react";
import { Card, Box, Avatar, CardMedia, Grid } from "@mui/material";

import withLoading from "../../../util/withLoading";

const StyledImg = (props) => {
  <Avatar alt="thumbnail img" src={props} sx={{ width: 100, height: 100 }} />;
};

function CurationItem(props) {
  const loading = true;
  const StyledImgWithLoading = withLoading(StyledImg(props.thumbnail));

  return (
    <Fragment>
      <Box width={450} >
        <Card width={400} height={271}>
          <CardMedia
            component="img"
            height="194"
            image={props.thumbnail}
            alt="Paella dish"
          />
        </Card>
      </Box>
    </Fragment>
  );
}

export default CurationItem;
