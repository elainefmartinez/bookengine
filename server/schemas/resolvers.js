const { User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, { username }) => {
      return User.create({ username });
    },
    login: async (parent, { email, password }) => {
      return User.findOne(
        { _id: userId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    saveBook: async (parent, { bookArray }) => {
      return User.findOneAndDelete({ _id: profileId });
    },
    removeBook: async (parent, { userId}, context) => {
      return User.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
