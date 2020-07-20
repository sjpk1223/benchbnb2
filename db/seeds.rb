# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.delete_all
b1 = Bench.create!([{ description: 'Joshs bench', lng: 88.33,  lat: 12.22 }])
b2 = Bench.create!([{ description: 'Joes bench', lng: 68.39,  lat: 13.02 }])
b3 = Bench.create!([{ description: 'Johns bench', lng: 8.26,  lat: 2.00 }])