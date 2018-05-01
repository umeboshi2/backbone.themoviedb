import { BaseMovieDbCollection } from './base'


export class TvSearch extends BaseMovieDbCollection
  url: -> "#{@baseUri}/search/tv"

export class MovieSearch extends BaseMovieDbCollection
  url: -> "#{@baseUri}/search/movie"
