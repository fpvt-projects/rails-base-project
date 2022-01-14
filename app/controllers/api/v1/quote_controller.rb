module Api
    module V1
        class QuoteController < ApplicationController

            def index
                @randomQuote = ZenQuotes::Client.today

                render json: {quote: @randomQuote}
            end
        end
    end
end
