import { useState } from "react";

type Props = {
  required?: string;
  validate?: (value: string) => boolean;
};

const useInput = ({ required, validate }: Props) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let error = "";
  let isValid = false;

  const isValidCheck = (val: string) => val.trim().length > 0;

  if (required) {
    isValid = isValidCheck(value);
  }

  if (validate) isValid = validate(value);

  error = (!isValid && isTouched && required) || "";

  const onSubmit = () => {
    setIsTouched(true);
    isValid = isValidCheck(value);
  };

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
    onSubmit,
  };
};

export default useInput;
