import { FormEvent, useState } from "react";
import { Movie } from '../interfaces/movie-interface';

type AlertError = {
  msg: string;
  error: boolean;
};

export const useForm = <T extends (title:string)=>Promise<Movie | AlertError>>(asyncFunction: T, {title}:{title:string})  => {
	const [dataForm, setDataForm] = useState<Movie | AlertError>()
  const handleForm = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    e.stopPropagation();
    asyncFunction(title)
      .then((res) => {
				setDataForm(res),
				console.log(res)
			})
      .catch((err:AlertError) => {
				setDataForm({
					msg:`${err}`,
					error: true
				})
			});
  };
  return { dataForm, setDataForm ,handleForm };
};
