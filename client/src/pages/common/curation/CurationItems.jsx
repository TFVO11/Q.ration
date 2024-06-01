import React from "react";
import CurationItem from "./CurationItem";
import { StyledGridContainer } from "./curation.style";
import { Grid } from "@mui/material";

function CurationItems(props) {
  const items = props.thumbnails;

  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
    >
      {items.map((item) => {
        return (
          <Grid item>
            <CurationItem thumbnail={item.thumbnail} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CurationItems;
