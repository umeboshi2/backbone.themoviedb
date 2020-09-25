import { BaseMovieDbCollection } from './base'

baseUri = "https://api.themoviedb.org/3"

export class TvSearch extends BaseMovieDbCollection
  url: -> "#{@baseUri}/search/tv"

export class MovieSearch extends BaseMovieDbCollection
  url: -> "#{@baseUri}/search/movie"
