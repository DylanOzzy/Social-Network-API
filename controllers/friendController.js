const { User } = require("../models");

const friendController = {
  addFriend: async (req, res) => {
    try {
      const { userId, friendId } = req.params;

      const user = await User.findById(userId);
      const friend = await User.findById(friendId);

      if (!user || !friend) {
        return res.status(404).json({ error: "User or friend not found." });
      }

      if (user.friends.includes(friendId)) {
        return res.status(400).json({ error: "Friend already added." });
      }

      user.friends.push(friendId);
      await user.save();

      res.status(200).json({ message: "Friend added successfully.", user });
    } catch (error) {
      handleServerError(error, res);
    }
  },

  removeFriend: async (req, res) => {
    try {
      const { userId, friendId } = req.params;

      const user = await User.findById(userId);
      const friend = await User.findById(friendId);

      if (!user || !friend) {
        return res.status(404).json({ error: "User or friend not found." });
      }

      if (!user.friends.includes(friendId)) {
        return res
          .status(400)
          .json({ error: "Friend not found in the friend list." });
      }

      user.friends = user.friends.filter(
        (friend) => friend.toString() !== friendId
      );
      await user.save();

      res.status(200).json({ message: "Friend removed successfully.", user });
    } catch (error) {
      handleServerError(error, res);
    }
  },
};

module.exports = friendController;