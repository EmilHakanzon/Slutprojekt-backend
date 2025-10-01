import Team from "../models/teamModel.js";

// funktioner för att hantera olika endpoints
// använder find för att hämta data från databasen
export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find({});
    res.json(teams);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Kunde inte hämta lag.", error: error.message });
  }
};

// Få fram en delmängd av datan
export const getTeamsByCity = async (req, res) => {
  try {
    const { city } = req.params;
    const teams = await Team.find({ stad: new RegExp(city, "i") }); // "i" gör sökningen case-insensitiv
    res.json(teams);
  } catch (error) {
    res.status(500).json({
      message: "Kunde inte hämta lag från den staden.",
      error: error.message,
    });
  }
};

// Få ut någon enstaka meta-data
export const getTeamCount = async (req, res) => {
  try {
    const count = await Team.countDocuments();
    res.json({ teamCount: count });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Kunde inte hämta antalet lag.", error: error.message });
  }
};

// Få ut en specifik resurs baserat på ID
export const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);

    if (!team) {
      return res.status(404).json({ message: "Laget hittades inte." });
    }

    res.json(team);
  } catch (error) {
    res.status(500).json({ message: "Ett fel uppstod.", error: error.message });
  }
};
