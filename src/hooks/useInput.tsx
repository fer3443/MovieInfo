import { ChangeEvent, useState } from "react";

export const useInput = <T extends Object>(initState: T) => {
  const [data, setData] = useState(initState);
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return {
    data,
    setData,
    onChange,
    ...data //permite desestructurar las propiedades al devolverlas
  };
};
