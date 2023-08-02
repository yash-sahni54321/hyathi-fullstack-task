const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please log in to access this resource.",
    });
  }

  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id); // Assuming the decodedData contains user details

    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token." });
  }
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
