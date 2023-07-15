// Create Token and saving in cookie
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  // Set the cookie header manually using res.setHeader()
  res.setHeader(
    "Set-Cookie",
    `token=${token}; Expires=${options.expires.toUTCString()}; HttpOnly`
  );

  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
