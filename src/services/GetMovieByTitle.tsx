import { API_KEY } from "../config/keys";
import { Movie } from "../interfaces/movie-interface";

export const GetMovieByTitle = async (title:string):Promise<Movie> => {
    const url:string = `http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}&`;
		try {
			const response:Movie = await fetch(url).then((res:Response) => res.json())
			if(response.Response === 'False'){
				throw new Error (`Ups!, ${response.Error}`)
			}
			return response
		} catch (error) {
			console.error(error)
			throw error
		}
		
}