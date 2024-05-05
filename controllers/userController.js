// create functions for creating user, getting all users, getting one user, updating user, deleting user, adding friend, removing friend

const { User } = require("../models");

module.exports = {
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("posts");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {},
  async deleteUser(req, res) {},
  async addFriend(req, res) {},
  async deleteFriend(req, res) {},
};
