const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({ msg: console.log("Not Found") });
};

module.exports = notFoundMiddleware;
