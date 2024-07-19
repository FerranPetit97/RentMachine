const CustomInput = ({ ...rest }) => {
  return (
    <input
      className="
      flex w-24 justify-center text-center bg-burnham-900 border-none rounded-[100px]
      focus:outline-none focus:ring-2 focus:ring-burnham-500
      focus:border-burnham-500
      "
      {...rest}
    />
  );
};

export default CustomInput;
