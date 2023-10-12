import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./listItem";

const List = ({ type }) => {
  const { filteredList } = useSelector(state => state.facts);
  const { gallery } = useSelector(state => state.images);
  const list = type === 'facts' ? filteredList : gallery;

  return (
    <React.Fragment>
      <ul className={`${type}-list`}>
        {list && list.map((obj) => {
          return <ListItem key={obj.id} element={obj} className={`${type}-list`} />
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;