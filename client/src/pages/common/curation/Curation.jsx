import React from "react";
import CurationItems from "./CurationItems";
import { curation } from "../../../object/dummy";
import { Container } from "./curation.style";

function Curation() {
  return (
    <Container>
      <CurationItems thumbnails={curation} />
    </Container>
  );
}

export default Curation;
