const bcrypt = require("bcryptjs");

const User = require("../models/User");

const generateToken =
  require("../utils/generateToken");

const ApiResponse =
  require("../utils/ApiResponse");


exports.register = async (
  req,
  res,
  next
) => {

  try {

    const {
      fullName,
      email,
      password
    } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return ApiResponse.error(
        res,
        "Email already exists",
        409
      );
    }

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(
        password,
        salt
      );

    const user =
      await User.create({
        fullName,
        email,
        password: hashedPassword
      });

    const token =
      generateToken(user._id);

    return ApiResponse.success(
      res,
      "User registered successfully",
      {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email
        }
      },
      201
    );

  } catch (error) {
    next(error);
  }
};


exports.login = async (
  req,
  res,
  next
) => {

  try {

    const {
      email,
      password
    } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {

      return ApiResponse.error(
        res,
        "Invalid email or password",
        401
      );

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return ApiResponse.error(
        res,
        "Invalid email or password",
        401
      );

    }

    const token =
      generateToken(user._id);

    return ApiResponse.success(
      res,
      "Login successful",
      {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email
        }
      }
    );

  } catch (error) {
    next(error);
  }
};


exports.getProfile = async (
  req,
  res,
  next
) => {

  try {

    const user =
      await User.findById(
        req.user.id
      ).select("-password");

    return ApiResponse.success(
      res,
      "User fetched",
      user
    );

  } catch (error) {
    next(error);
  }
};