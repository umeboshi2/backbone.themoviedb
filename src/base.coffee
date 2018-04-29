import Backbone from 'backbone'
import PageableCollection from 'backbone.paginator'

baseUri = "https://api.themoviedb.org/3"

export class BaseMovieDbModel extends Backbone.Model
  baseUri: baseUri
  fetch: (options) ->
    options = options or {}
    options.data = options.data or {}
    options.data.api_key = @apiKey
    super options

export class BaseMovieDbCollection extends PageableCollection
  baseUri: baseUri
  mode: 'server'
  state:
    currentPage: 1
    pageSize: 20
  queryParams:
    pageSize: undefined
  fetch: (options) ->
    options = options or {}
    options.data = options.data or {}
    options.data.api_key = @apiKey
    super options
  parse: (resp) ->
    @state.totalPages = resp.total_pages
    @state.lastPage = resp.total_pages
    @state.totalRecords = resp.total_results
    super resp.results
