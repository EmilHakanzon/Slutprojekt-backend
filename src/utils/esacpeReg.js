// en säkerhets funktion för att göra så man inte kan retunera alla lagen med .* från databasen.
// ersätter alla specialtecken
export function escapeRegex(input) {
  return String(input).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
