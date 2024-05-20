import React from "react";
import CurationItem from "./CurationItem";

function CurationItems(props) {
  const items = props.thumbnails;
  console.log(items)
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <CurationItem thumbnail={item.thumbnail}/>
          </div>
        );
      })}
    </div>
  );
}

export default CurationItems;
