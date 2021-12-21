class HomeController < ApplicationController
    before_action :set_default_response_format



    def index
    
    end

    protected

    def set_default_response_format
        request.format = :html
    end
end