import React from "react";
import CurationItems from "./CurationItems";
import { curation } from "../../../object/dummy";
import { Box } from "@mui/material";

function Curation() {
  console.log("Curation")
  
  return (
    <div>
      <Box>
        <CurationItems thumbnails={curation}/>
      </Box>
    </div>
  );
}

export default Curation;
