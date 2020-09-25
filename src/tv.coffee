import { BaseMovieDbModel, BaseMovieDbCollection} from './base'

baseUri = "https://api.themoviedb.org/3"

export class TvDetails extends BaseMovieDbModel
  urlRoot: -> "#{@baseUri}/tv"

export class TvCredits extends BaseMovieDbModel
  url: -> "#{@baseUri}/tv/#{@id}/credits"

export class TvExternalIDs extends BaseMovieDbModel
  url: -> "#{@baseUri}/tv/#{@id}/external_ids"

export class TvImages extends BaseMovieDbModel
  url: -> "#{@baseUri}/tv/#{@id}/images"

export class TvSimilarShows extends BaseMovieDbCollection
  url: -> "#{@baseUri}/tv/#{@tvId}/similar"

export class TvPopularShows extends BaseMovieDbCollection
  url: -> "#{@baseUri}/tv/popular"

export class TvTopRatedShows extends BaseMovieDbCollection
  url: -> "#{@baseUri}/tv/top_rated"

export class TvSeasonDetails extends BaseMovieDbModel
  urlRoot: ->  "#{@baseUri}/tv/#{@tvId}/season"
