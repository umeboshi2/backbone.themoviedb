import { BaseMovieDbModel, BaseMovieDbCollection} from './base'

baseUri = "https://api.themoviedb.org/3"

export class MovieDetails extends BaseMovieDbModel
  urlRoot: -> "#{@baseUri}/movie"

export class MovieCredits extends BaseMovieDbModel
  url: -> "#{@baseUri}/movie/#{@id}/credits"

export class MovieExternalIDs extends BaseMovieDbModel
  url: -> "#{@baseUri}/movie/#{@id}/external_ids"

export class MovieImages extends BaseMovieDbModel
  url: -> "#{@baseUri}/movie/#{@id}/images"

export class MovieSimilarMovies extends BaseMovieDbCollection
  url: -> "#{@baseUri}/movie/#{@movieId}/similar"

export class MoviePopularMovies extends BaseMovieDbCollection
  url: -> "#{@baseUri}/movie/popular"

export class MovieTopRatedMovies extends BaseMovieDbCollection
  url: -> "#{@baseUri}/movie/top_rated"
