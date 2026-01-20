import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "default_secret";
const g = /** @type {any} */ (globalThis);
const activeTokens = g.__activeTokens ?? (g.__activeTokens = new Map());

/**
 * @param {any} userId
 */
function getActiveToken(userId) {
  return activeTokens.get(userId);
}

/**
 * @param {any} req
 * @param {any} res
 * @param {any} next
 */
export default function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(
    token,
    SECRET_KEY,
    (/** @type {any} */ err, /** @type {any} */ user) => {
      if (err || !user || typeof user === "string") {
        return res.status(403).json({ error: "Invalid or expired token" });
      }
      const storedToken = getActiveToken(user.id);
      if (!storedToken || storedToken !== token) {
        return res
          .status(403)
          .json({ error: "Session revoked, please login again" });
      }
      req.user = user;
      next();
    },
  );
}
