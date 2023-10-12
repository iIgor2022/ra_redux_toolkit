import React from "react";
import { CardTitle, ImageUrl, Li } from "../Atoms/atom";
import { nanoid } from "nanoid";

const ListItem = ({ element, className }) => {
  if (!element) return null;

  return (
    <React.Fragment>
      <Li key={nanoid()} element={element} className={className}>
        {element.url ? (
          <ImageUrl
            key={nanoid()}
            {...element}
            className={`${className}-item-image`}
          />
        ) : (
          <CardTitle key={nanoid()} title={element.title}></CardTitle>
        )}
      </Li>
    </React.Fragment>
  );
};

export default ListItem;