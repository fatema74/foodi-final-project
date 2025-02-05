const express = require('express');
const Carts = require('../modules/Carts');
const router = express.Router();

const cartController = require('../controllers/cartControllers');

router.get('/', cartController.getCartByEmail);
router.post('/', cartController.addToCart);
router.delete('/:id', cartController.deleteCart);
router.put('/:id', cartController.deleteCart);
router.get('/:id', cartController.getSingleCart);

module.exports = router;
