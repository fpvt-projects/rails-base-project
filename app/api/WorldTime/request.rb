require 'rest-client'

module WorldTime
    class Request
        API_URL = "http://worldtimeapi.org/api/timezone"
        
        def self.call(http_method:, endpoint:)
            result = RestClient::Request.execute(
                method: http_method,
                url: "#{API_URL}#{endpoint}",
                headers: {"Content-Type" => "application/json"}
            )
            return result
        end
    end
end