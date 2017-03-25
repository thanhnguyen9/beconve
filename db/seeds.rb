a = User.new
a.email = 'a@yaho.com'
a.password = '11111111'
a.name = 'Venus Signature Nails & Spa'
a.address = '4550 Eldorado Pkwy, McKinney, TX 75070'
a.rating = 4.6
a.reviews = 77
a.phone = '(214) 592-9988'
a.image = 'https://s3-media2.fl.yelpcdn.com/bphoto/xIEdQO_ubEtkfI0vDFTfzw/o.jpg'
a.save

a = User.new
a.email = 'b@yaho.com'
a.password = '11111111'
a.name = 'Hollywood Nails & Spa'
a.address = '2890 Craig Dr #105, McKinney, TX 75070'
a.rating = 3.2
a.reviews = 29
a.phone = '(972) 548-8910'
a.image = 'http://www.hollywoodstarnailspa.com/images/images_home/03.jpg'
a.save

a = User.new
a.email = 'c@yaho.com'
a.password = '11111111'
a.name = 'Virginia Nails'
a.address = '2741 Virginia Pkwy # 200, McKinney, TX 75071'
a.rating =  3.8
a.reviews = 89
a.phone = '(972) 325-5253'
a.warranty = '9 months'
a.image = 'http://az616578.vo.msecnd.net/files/2016/06/03/636005240725965631-621871392_1417037504860.jpeg'
a.save

AvailableCity.create(name: 'McKinney, Texas', longitude: -96.6398, latitude: 33.1972)
AvailableCity.create(name: 'Dallas, Texas', longitude: -96.7970, latitude: 32.7767)
