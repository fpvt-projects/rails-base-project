class CryptoCurrency < ApplicationRecord
    require 'securerandom'
    after_create :add_contract_id

    def add_contract_id
        self.contract_id = "0x#{SecureRandom.hex(20)}"
        self.save!
    end
end
