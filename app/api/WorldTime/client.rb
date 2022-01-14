module WorldTime
    class Client
        def self.philippines
            response = Request.call(http_method: 'get', endpoint: '/Asia/Manila')
        end
    end
end