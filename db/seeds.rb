# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

a = User.first
a.
a.address = '500 West Las Colinas Boulevard'
a.save

a = User.find(2)
a.address = '7904 N Glen Dr, Irving, TX 75063'
a.save

a = User.last
a.address = '5001 N MacArthur Blvd, Irving, TX 75038'
a.save