import CheckInput from "./CheckInput";

// eslint-disable-next-line react/prop-types
function Header({ selectedItems, isAllSelect, handleAllSelect, handleDelete }) {
  return (
    <header>
      <div className="flex flex-row justify-between items-center py-4">
        <div className="flex flex-row items-center">
          {isAllSelect && (
            <CheckInput
              checked={isAllSelect}
              onChange={handleAllSelect} // Handle checkbox state change
              className="mr-2"
            />
          )}
          <h1 className="text-xl md:text-3xl font-bold  text-purple-600">
            {isAllSelect
              ? `${selectedItems.length}  Files selected`
              : "Image Gallery"}
          </h1>
        </div>
        {isAllSelect && (
          <button onClick={handleDelete} className="font-bold text-red-600">
            Delete Files
          </button>
        )}
      </div>
      <hr className="mb-8" />
    </header>
  );
}

export default Header;
