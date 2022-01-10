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
            currency_name: 'Dodge Tiger',
            currency_symbol: 'DGT',
            contract_id: 'x06123sxcasdfSACFSDs12976',
            total_supply: '10000000',
            market_cap: '5000',
            currency_description: 'New Sh!t Coin',
            currency_price: '5'
        }
    ]
)