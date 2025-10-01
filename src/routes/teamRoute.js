import { Router } from "express";
import Team from "../models/teamModel.js";
import {
  getTeams,
  getTeamsByCity,
  getTeamCount,
  getTeamById,
} from "../controllers/teamsController.js";
import { escapeRegex } from "../utils/esacpeReg.js";

// routes relaterade till lag
const r = Router();

/** få ut alla lag */
r.get("/", getTeams);

// få ut lag från en viss stad
r.get("/city/:city", getTeamsByCity);

// få ut antal lag
r.get("/count", getTeamCount);

// sök lag med query-parametrar
r.get("/search", async (req, res, next) => {
  try {
    const { q, stad } = req.query;
    const filter = {};
    if (q) filter.namn = { $regex: new RegExp(escapeRegex(q), "i") };
    if (stad) filter.stad = { $regex: new RegExp(escapeRegex(stad), "i") };

    const teams = await Team.find(filter)
      .select("namn stad arena grundan")
      .lean();

    res.json(teams);
  } catch (e) {
    next(e);
  }
});

// få ut ett lag baserat på ID
r.get("/:id", getTeamById);

export default r;
