import React from "react";
import CheckInput from "./CheckInput";

// eslint-disable-next-line react/prop-types
function Header({ selectedItems, selectAll, handleSelectAll }) {
  return (
    <header>
      <div>
        <h1 className="text-3xl font-bold  text-purple-600">
          {selectedItems
            ? `${selectedItems.length}  is selected`
            : "Image Galary"}
        </h1>
        <CheckInput
          checked={selectAll}
          onChange={handleSelectAll} // Handle checkbox state change
        />
      </div>
    </header>
  );
}

export default Header;
