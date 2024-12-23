export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso prohibido. Se necesitan permisos de administrador.' });
  }
  next();
};
