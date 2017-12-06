const Product = require('./Product')

Product.create([
  { brandName: 'Coca COla', name: '390ml Glass Bottle Coke'},
  { brandName: 'Fanta', name: '390ml Glass Bottle Fanta'},
  { brandName: 'Sprite', name: '390ml Glass Bottle Sprite'}
])
.then((products) => {
  console.log('Created', products)
})
.catch((error) => {
  console.log('Unable to seed products!', error)
})
