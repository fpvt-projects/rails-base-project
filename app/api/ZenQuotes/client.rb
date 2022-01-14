module ZenQuotes
    class Client
        def self.today
            response = Request.call(http_method: 'get', endpoint: '/today')
        end

        def self.random
            response = Request.call(http_method: 'get', endpoint: '/random')
        end
    end
end