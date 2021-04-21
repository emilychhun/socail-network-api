let router = require('express').Router();

let thoughtRoutes = require('./thought-routes');
let userRoutes = require('./user-routes');
// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;