# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



coin = CryptoCurrency.create(
    [
        {
            currency_name: 'Dodge-Tiger',
            currency_symbol: 'DGT',
            contract_id: 'x06123sxcasdfSACFSDs12976',
            total_supply: '10000000',
            market_cap: '5000',
            currency_description: 'Coin For Dodge',
            currency_price: '0.0005'
        },

        {
            currency_name: 'Ape-Master',
            currency_symbol: 'APM',
            contract_id: 'x0123sjdasasd1qwsedad12',
            total_supply: '350000000',
            market_cap: '10000',
            currency_description: 'Coin for Apes',
            currency_price: '0.00002857142'
        }
    ]
)

holders = User.create (
    [
        {
            firstname:'Francis',
            lastname:'Talan',
            email:'francistalan@testmail.com',
            password:'12345',
            password_confirmation:'12345'
        }
    ]
)