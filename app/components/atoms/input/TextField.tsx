import React, { InputHTMLAttributes } from "react";
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  props?: HTMLInputElement;
  register?: any;
}
const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  className = "",
  register,
  ...props
}) => {
  return (
    <>
      <div className={`mb-4 ${className}`}>
        {label && (
          <label className="font-bold text-xl block mb-2" htmlFor="">
            {" "}
            {label}
          </label>
        )}
        <input
          className="border border-blue-500 rounded py-2 px-3 text-grey-700 "
          {...register}
          {...props}
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    </>
  );
};

export default TextField;
