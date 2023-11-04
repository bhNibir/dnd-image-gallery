import CheckInput from "./CheckInput";

// eslint-disable-next-line react/prop-types
function Header({ selectedItems, selectAll, handleSelectAll }) {
  return (
    <header>
      <div className="flex flex-row justify-between items-center py-4">
        <div className="flex flex-row items-center">
          {selectedItems.length > 0 && (
            <CheckInput
              checked={selectAll}
              onChange={handleSelectAll} // Handle checkbox state change
              className="mr-2"
            />
          )}
          <h1 className="text-xl md:text-3xl font-bold  text-purple-600">
            {selectedItems.length > 0
              ? `${selectedItems.length}  Files selected`
              : "Image Gallery"}
          </h1>
        </div>
        {selectedItems.length > 0 && (
          <button className="font-bold text-red-600">Delete Files</button>
        )}
      </div>
      <hr className="mb-8" />
    </header>
  );
}

export default Header;
