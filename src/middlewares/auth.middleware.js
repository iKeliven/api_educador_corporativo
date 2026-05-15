const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {

  const authHeader =
    req.headers.authorization;

  /* TOKEN NÃO ENVIADO */
  if (!authHeader) {
    return res.status(401).json({
      message: "Token não enviado",
    });
  }

  /* Bearer TOKEN */
  const [, token] =
    authHeader.split(" ");

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.userId = decoded.id;

    return next();

  } catch {

    return res.status(401).json({
      message: "Token inválido",
    });

  }
}

module.exports = authMiddleware;