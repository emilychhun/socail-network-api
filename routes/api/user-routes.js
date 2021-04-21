  
let router = require('express').Router();

let {
    getAllUsers,
    getUserById,
    deleteUser,
    addFriend,
    createUser,
    updateUser,
    removeFriend
} = require('../../controllers/user-controller');
//set up GET all and POST at /api/user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);
//set up GET one, PUT, and DELETE at api/user/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
//set up POST and DELECT at api/addFriend
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;