import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

/**
 * Middleware to verify user has admin status
 * Must be used after verifyToken middleware
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
export default function requireAdmin(req, res, next) {
  // Check if user object exists (should be set by verifyToken middleware)
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized - No user found" });
  }

  // Check if user has admin status
  if (req.user.status !== "admin") {
    return res.status(403).json({
      error: "Forbidden - Admin access required",
      message: "You do not have permission to access this resource",
    });
  }

  next();
}
