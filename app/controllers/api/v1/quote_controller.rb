module Api
    module V1
        class QuoteController < ApplicationController

            def index
                @randomQuote = ZenQuotes::Client.random

                render json: {quote: @randomQuote}

                
            end

            def pTime
                @wordoras = WorldTime::Client.philippines

                render json: {data: @wordoras}
            end
        end
    end
end
