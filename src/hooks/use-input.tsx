import { useState } from "react";

type Props = {
  required?: string;
  validate?: (value: string) => boolean;
};

const useInput = ({ required, validate }: Props) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let error = "";
  let isValid = true;

  if (required) {
    isValid = value.trim().length > 0;
  }

  if (validate) isValid = validate(value);

  error = (!isValid && isTouched && required) || "";

  const blurHandler = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
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
