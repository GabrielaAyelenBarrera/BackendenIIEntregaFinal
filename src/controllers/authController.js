import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'No se pudo localizar al usuario.' });
    }

     const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',  
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Fallo al acceder a la sesión.', error });
  }
};
