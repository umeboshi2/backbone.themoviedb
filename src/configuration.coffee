import { BaseMovieDbModel } from './base'


export default class ConfigModel extends BaseMovieDbModel
  url: -> "#{@baseUri}/configuration"
