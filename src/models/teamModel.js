import { Schema, model } from "mongoose";

/** Inbäddat schema utan _id */
const arenaSchema = new Schema(
  {
    namn: { type: String, trim: true },
    kapacitet: { type: Number, min: 0 },
    plats: { type: String, trim: true },
  },
  { _id: false },
);

const teamSchema = new Schema(
  {
    namn: { type: String, required: true, index: true, trim: true },
    stad: { type: String, trim: true },
    grundan: { type: Number, min: 1800, max: new Date().getFullYear() }, // om det är "grundat år"
    arena: arenaSchema,
  },
  { timestamps: true, versionKey: false },
);

/** Text-index för mina sökningar (namn + stad) */
teamSchema.index({ namn: "text", stad: "text" });

export default model("Team", teamSchema);
