import provincias from "./data/provincias.json";

export default function handler(req, res) {
  res.status(200).json(provincias);
}
