class CryptoController < ApplicationController
    def GetCrypto
        client = CoingeckoRuby::Client.new
        # client.price('bitcoin')
    end
end
