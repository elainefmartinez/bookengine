const { User } = require('../models');

const resolvers = {
  Query: {
    profiles: async () => {
      return User.find();
    },

    profile: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addProfile: async (parent, { username }) => {
      return Profile.create({ username });
    },
    addSkill: async (parent, { userId, skill }) => {
      return User.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return User.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { userId, skill }) => {
      return User.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
