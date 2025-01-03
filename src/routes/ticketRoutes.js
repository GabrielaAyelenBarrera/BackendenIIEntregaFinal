import express from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware.js';  
import Ticket from '../models/Ticket.js';

const router = express.Router();

router.get('/', authenticateJWT, async (req, res) => {
  try {
    const tickets = await Ticket.find({ purchaser: req.user.email }); 
    res.status(200).json(tickets);
  } catch (error) {
    console.error('Hubo un fallo al intentar obtener los tickets:', error);
    res.status(500).json({ message: 'Hubo un fallo al intentar obtener los tickets', error });
  }
});

export default router;
