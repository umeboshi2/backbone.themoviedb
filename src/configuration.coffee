import { BaseMovieDbModel } from './base'

baseUri = "https://api.themoviedb.org/3"

class ConfigModel extends BaseMovieDbModel
  url: -> "#{@baseUri}/configuration"

export default ConfigModel
