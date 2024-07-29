import React from 'react';
import { Select } from '@chakra-ui/react';

const SortSelect = ({ type, sort, order, handleSortChange }) => {
  return (
    <Select
      placeholder={`Sort based on ${type}`}
      sx={{
        "@media screen and (max-width: 767px)": {
          fontSize: "9px",
        },
      }}
      fontSize="sm"
      value={sort === type ? order : ""}
      onChange={handleSortChange(type)}
    >
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </Select>
  );
};

export default React.memo(SortSelect);
