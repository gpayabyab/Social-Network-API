const router = require("express").Router();
const {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);


module.exports = router;
