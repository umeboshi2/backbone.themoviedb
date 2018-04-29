import { BaseMovieDbCollection } from './base'


export class TvSearch extends BaseMovieDbCollection
  url: -> "#{@baseUri}/search/tv"
