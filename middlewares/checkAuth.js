import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY);

    next();
  } catch (err) {
    res.status(401).json({ message: "Auth failed" });
  }
};
