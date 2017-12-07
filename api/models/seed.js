const Product = require('./Product')
const Store = require('./Store')

Product.create([
  { brandName: 'Coca Cola', name: '390ml Glass Bottle Coke'},
  { brandName: 'Fanta', name: '390ml Glass Bottle Fanta'},
  { brandName: 'Sprite', name: '390ml Glass Bottle Sprite'}
])
.then((products) => {
  console.log('Created', products)
})
.catch((error) => {
  console.log('Unable to seed products!', error)
})

Store.create([
  { storeName: 'Kmart', location: '390 Street'},
  { storeName: 'Target', location: '390 Drive'},
  { storeName: 'Big W', location: '390 Crescent'}
])
.then((stores) => {
  console.log('Created', stores)
})
.catch((error) => {
  console.log('Unable to seed stores!', error)
})
