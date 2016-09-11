# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

a = User.first
a.name = 'Cell Phone Genius - Las Colinas iPhone Repair Center'
a.address = '5483 N MacArthur Blvd, Irving, TX 75038'
a.rating = 4.6
a.reviews = 77
a.reviews_link ='https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=shop phone repair&tbs=lf:1,lf_ui:3&rflfq=1&rlha=0&rllag=32910342,-96882988,13846&tbm=lcl&rldimm=16317440246834225274&lrd=0x864ea19e5c0ae129:0xc5efaac552344b4b,1,&rlfi=hd:;si:14262806309370088267'
a.phone = '(972) 325-5253'
a.warranty = '3 months'
a.image = 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/iphone-repair-dallas-uptown.jpg'
a.save

a = User.find(2)
a.name = 'Cellular Parts USA'
a.address = '11532 Harry Hines Blvd #212, Dallas, TX 75229'
a.rating = 2.8
a.reviews = 29
a.reviews_link = 'https://www.google.com/search?q=CELL+PHONE+REPAIR+TX&oq=CELL+PHONE+REPAIR+TX&aqs=chrome..69i57j69i60l3.152j0j7&sourceid=chrome&ie=UTF-8#lrd=0x864c278f0a4ba7a7:0xfb0d7e19b5dc8f1f,1,'
a.phone = '(972) 325-5253'
a.warranty = '6 months'
a.image = 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'
a.save

a = User.last
a.name = 'CELL PHONE REPAIR TX'
a.address = '11422 Harry Hines Blvd #117, Dallas, TX 75229'
a.rating = 4.4
a.reviews = 89
a.reviews_link = 'https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=shop phone repair&tbs=lf:1,lf_ui:3&rflfq=1&rlha=0&rllag=32910342,-96882988,13846&tbm=lcl&rldimm=16317440246834225274&lrd=0x864c32b033942345:0x6219c49d978ca399,1,&rlfi=hd:;si:7068897271266190233'
a.phone = '(972) 325-5253'
a.warranty = '9 months'
a.image = 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/ipad-repair-north-fitzhugh-TX.jpg'
a.save


Price.create(device_type: 'ipad', name: 'ipad 2', issue: 'broken screen', price: '90', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad 3', issue: 'broken screen', price: '91', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad 4', issue: 'broken screen', price: '92', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini', issue: 'broken screen', price: '93', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini 2', issue: 'broken screen', price: '94', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini 3', issue: 'broken screen', price: '95', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad pro', issue: 'broken screen', price: '96', user_id: 1)

Price.create(device_type: 'ipad', name: 'ipad 2', issue: 'faulty battery', price: '80', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad 3', issue: 'faulty battery', price: '81', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad 4', issue: 'faulty battery', price: '82', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini', issue: 'faulty battery', price: '83', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini 2', issue: 'faulty battery', price: '84', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini 3', issue: 'faulty battery', price: '85', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad pro', issue: 'faulty battery', price: '86', user_id: 1)

Price.create(device_type: 'ipad', name: 'ipad 2', issue: 'not on', price: '70', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad 3', issue: 'not on', price: '71', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad 4', issue: 'not on', price: '72', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini', issue: 'not on', price: '73', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini 2', issue: 'not on', price: '74', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini 3', issue: 'not on', price: '75', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad pro', issue: 'not on', price: '76', user_id: 1)

Price.create(device_type: 'ipad', name: 'ipad 2', issue: 'liquid damage', price: '60', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad 3', issue: 'liquid damage', price: '61', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad 4', issue: 'liquid damage', price: '62', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini', issue: 'liquid damage', price: '63', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini 2', issue: 'liquid damage', price: '64', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad mini 3', issue: 'liquid damage', price: '65', user_id: 1)
Price.create(device_type: 'ipad', name: 'ipad pro', issue: 'liquid damage', price: '66', user_id: 1)