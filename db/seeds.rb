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
a.reviews_link = 'https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=shop phone repair&tbs=lf:1,lf_ui:3&rflfq=1&rlha=0&rllag=32910342,-96882988,13846&tbm=lcl&rldimm=16317440246834225274&fll=32.946879726245044,-96.90843311826171&fspn=0.39478672194439923,0.690216616011412&fz=11&oll=33.00131535,-96.90740315&ospn=0.417011244115983,0.4450402363012813&oz=10&lrd=0x864e83b2d99312c9:0xd6238ff9a7fca95,1,&qop=1&rlfi=hd:;si:964395940670589589'
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