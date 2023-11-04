import { twMerge } from "tailwind-merge";

function CheckInput({ checked, onChange, className }) {
  // console.log(twMerge("z-20 default:ring-2", className));
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange} // Handle checkbox state change
      className={twMerge("z-20 default:ring-2", className)}
    />
  );
}

export default CheckInput;
