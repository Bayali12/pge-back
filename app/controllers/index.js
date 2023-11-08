import Incident from '../models/index.js';

export const getAll = async (req, res) => {
  try {
    const projection = {
      updatedAt: 0,
    };
    const incidents = await Incident.find({}, projection);

    res.status(200).json(incidents);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to get incidents',
    });
  }
};

export const toogleReadStatus = async (req, res) => {
  try {
    const { id } = req.body;

    const incident = await Incident.findById(id);
    incident.isRead = !incident.isRead;

    incident.save(incident);

    res.status(200).json({
      success: true,
      message: 'isRead toggled for incidents',
      incident,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to toggle isRead for incidents',
    });
  }
};

export const create = async (req, res) => {
  try {
    const { importance, equipment, message, responsible } = req.body;

    const newIncident = new Incident({
      importance,
      equipment,
      message,
      responsible,
      isRead: false, // По умолчанию устанавливаем значение свойства isRead на false
    });

    await newIncident.save();
    res.status(201).json({ success: true, incident: newIncident });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: 'Failed to create incident' });
  }
};

export const remove = async (req, res) => {
  try {
    const { incidentIds } = req.body;

    await Incident.deleteMany({ _id: { $in: incidentIds } });
    res
      .status(200)
      .json({ success: true, message: 'Incidents deleted successfully' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: 'Failed to delete incidents' });
  }
};
