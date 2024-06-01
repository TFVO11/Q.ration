import React from "react";
import CurationItems from "./CurationItems";
import { curation } from "../../../object/dummy";
import { Container } from "./curation.style";
import Title from "../../../UI/title/Title";

function Curation() {
  return (
    <div>
      <Container>
        <Title title="Curation" />
        <CurationItems thumbnails={curation} />
      </Container>
    </div>
  );
}

export default Curation;
