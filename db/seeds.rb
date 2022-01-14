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
            total_supply: '10000000',
            market_cap: '5000',
            currency_description: 'Coin For Dodge',
            currency_price: '0.0005'
        },

        {
            currency_name: 'Ape-Master',
            currency_symbol: 'APM',
            total_supply: '350000000',
            market_cap: '10000',
            currency_description: 'Coin for Apes',
            currency_price: '0.00002857142'
        },

        {
            currency_name: 'Crypto-Ships',
            currency_symbol: 'CSHIPS',
            total_supply: '100000000',
            market_cap: '10000',
            currency_description: 'Coin For Dodge',
            currency_price: '0.0005'
        },

        {
            currency_name: 'Infinity-Sky',
            currency_symbol: 'ISKY',
            total_supply: '1000000',
            market_cap: '5000',
            currency_description: 'Coin For Dodge',
            currency_price: '0.22'
        },

        {
            currency_name: 'Bomb-Crypto',
            currency_symbol: 'BCOIN',
            total_supply: '100000000',
            market_cap: '100000',
            currency_description: 'Coin For Dodge',
            currency_price: '0.001'
        },


        {
            currency_name: 'Polygon',
            currency_symbol: 'Matic',
            total_supply: '10000000000',
            market_cap: '15000000000',
            currency_description: 'Coin For Dodge',
            currency_price: '1.5'
        },


        
    ]
)

holders = User.create (
    [
        {
            firstname:'Francis',
            lastname:'Talan',
            email:'francistalan@testmail.com',
            password:'12345',
            password_confirmation:'12345',
            admin: true
        }
    ]
)