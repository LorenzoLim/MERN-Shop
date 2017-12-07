const express = require('express');
const Store = require('../models/Store');
const { requireJWT } = require('../middleware/auth')

const router = new express.Router();

router.get('/stores', requireJWT, (req, res) => {
  Store.find().then((stores) => {
    res.send(stores)
  })
  .catch((error) => {
    res.status(500).send({ error: error.message })
  })
})

router.get('/stores/:id', requireJWT, (req, res) => {
  Store.findById(req.params.id).then((store) => {
    res.send(store)
  })
  .catch((error) => {
    res.status(500).send({ error: error.message })
  })
})

module.exports = router;
