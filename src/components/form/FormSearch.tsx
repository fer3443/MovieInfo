interface Title {
  title: string;
}
type AlertError = {
  msg: string;
  isTrue: boolean;
};

import { FormEvent, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { GetMovieByTitle } from "../../services/GetMovieByTitle";

import { Movie } from "../../interfaces/movie-interface";

import "./FormSearch.css";
import { MovieCard } from "../movieCard/MovieCard";

export const FormSearch = () => {
  const [dataTitle, setDataTitle] = useState<Title>({
    title: "",
  });
  const { onChange, ...data } = useInput(dataTitle);
  const { title } = data;
  const [result, setResult] = useState<Movie>();
  const [errorResult, setErrorResult] = useState<AlertError>({
    msg: "",
    isTrue: false,
  });

  const validate = (title: string): boolean => {
    if (title.trim() === "") {
      alert("debe completar los campos");
      return false;
    }
    return true;
  };
  const handleForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    if (!validate(title)) {
      return;
    }
    GetMovieByTitle(title)
      .then((res) => {
        console.log(res),
          setErrorResult({
            ...errorResult,
            isTrue: false,
          });
        setResult(res);
        setDataTitle({
          title: "",
        });
      })
      .catch((err: AlertError) => {
        setErrorResult({
          msg: `${err}`,
          isTrue: true,
        });
      });
  };
  return (
    <>
      <div className="wrapper">
        <form className="form-search" onSubmit={handleForm}>
          <label htmlFor="search">
            <input
              type="text"
              name="title"
              id="search"
              value={title}
              onChange={onChange}
              placeholder="Buscar por titulo de película o serie"
            />
          </label>
          <button type="submit" className="button-pri">
            buscar
          </button>
        </form>
      </div>
      {result !== undefined && !errorResult.isTrue ? (
        <MovieCard movie={result} />
      ) : (
        <p>{errorResult.msg}</p>
      )}
    </>
  );
};
