import React from "react";
import { Input } from "antd";

interface IProps {
  label: string;
  type: string;
  helperText: string;
  error: boolean;
  otherProps: any;
}

const InputForm = ({
  label,
  type,
  helperText,
  error,
  ...otherProps
}: IProps) => {
  return (
    <div>
      <label>
        {label}:
        <Input {...otherProps} type={type} className="w180" />
      </label>
      {error && <p style={{ color: "red" }}>{helperText}</p>}
    </div>
  );
};

export default InputForm;
