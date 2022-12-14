import { useState } from "react";

type Props = {
  required?: string;
  validate?: (value: string) => boolean;
  initialValue?: string;
};

const useInput = ({ required, validate, initialValue = "" }: Props) => {
  const [value, setValue] = useState(initialValue || "");
  const [isTouched, setIsTouched] = useState(false);

  let error = "";
  let isValid = false;

  const isValidCheck = (val: string) => val.trim().length > 0;

  if (required) {
    isValid = isValidCheck(value);
  }

  if (validate) isValid = validate(value);

  error = (!isValid && isTouched && required) || "";

  const blurHandler = () => {
    setIsTouched(true);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    error,
    isValid,
    reset,
    blurHandler,
    changeHandler,
  };
};

export default useInput;
