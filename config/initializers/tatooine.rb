module Tatooine
  API_BASE = "https://swapi.dev/api/"
  ERROR_CLASSES = [BadRequest, NotFound, InternalServerError, BadGateway, ServiceUnavailable, GatewayTimeout, OriginDown].freeze
end