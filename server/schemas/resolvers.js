const { User } = require("../models");
const {AuthenticationError} = require ("apollo-server-express"); 
const { findByIdAndUpdate} = require("../models/User");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData= await User.findOne({ _id: context.user._id }).select(
          "-__v - password"
        );
        return userData;
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      let user = await User.create(args);
      let token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      let user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      let passwordValid = await user.isCorrectPassword(password);

      if (!passwordValid) {
        throw AuthenticationError;
      }

      let token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { bookData }, context) => {
      if (context.user) {
        let modifiedUser = await findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: bookData } },
          { new: true }
        );

        return modifiedUser;
      }
      throw AuthenticationError;
    },

    removeBook: async (parent, { bookId}, context) => {
      if (context.user) {
        let modifiedUser = await findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks:{bookId}} },
          { new: true }
        );

        return modifiedUser;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
