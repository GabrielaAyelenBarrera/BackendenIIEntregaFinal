import Ticket from '../models/Ticket.js'; 

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();

    if (tickets.length === 0) {
      return res.status(404).json({ message: 'No se hallaron tickets.' });
    }

    res.status(200).json({
      message: 'Tickets recuperados correctamente.',
      tickets,
    });
  } catch (error) {
    console.error('Se produjo un error al obtener los tickets:', error);
    res.status(500).json({ message: 'Hubo un problema al obtener los tickets', error });
  }
};  